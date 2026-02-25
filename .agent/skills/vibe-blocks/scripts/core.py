#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Vibe Blocks Search Core - BM25 search engine for components.

Supports two library sources:
  - rl  (Relume Library): Categorized by semantic slug (e.g. header/header-1.md)
  - cn  (Custom/Shadcn):  Categorized by component type (e.g. hero/hero1.md, feature/feature1.md)
"""

import os
import re
from pathlib import Path
from math import log
from collections import defaultdict

# ============ CONFIGURATION ============
LIBRARY_DIR = Path(__file__).parent.parent / "library"
RL_DIR = LIBRARY_DIR / "rl"
CN_DIR = LIBRARY_DIR / "cn"
MAX_RESULTS = 5  # Increased default since we now search across 2 sources

# Source labels for display
SOURCE_LABELS = {
    "rl": "Relume Library (rl)",
    "cn": "Custom/Shadcn (cn)",
}

# ============ BM25 IMPLEMENTATION ============
class BM25:
    """BM25 ranking algorithm for text search"""

    def __init__(self, k1=1.5, b=0.75):
        self.k1 = k1
        self.b = b
        self.corpus = []
        self.doc_lengths = []
        self.avgdl = 0
        self.idf = {}
        self.doc_freqs = defaultdict(int)
        self.N = 0

    def tokenize(self, text):
        """Lowercase, split, remove punctuation, filter short words"""
        text = re.sub(r'[^\w\s]', ' ', str(text).lower())
        return [w for w in text.split() if len(w) > 2]

    def fit(self, documents):
        """Build BM25 index from documents"""
        self.corpus = [self.tokenize(doc) for doc in documents]
        self.N = len(self.corpus)
        if self.N == 0:
            return
        self.doc_lengths = [len(doc) for doc in self.corpus]
        self.avgdl = sum(self.doc_lengths) / self.N

        for doc in self.corpus:
            seen = set()
            for word in doc:
                if word not in seen:
                    self.doc_freqs[word] += 1
                    seen.add(word)

        for word, freq in self.doc_freqs.items():
            self.idf[word] = log((self.N - freq + 0.5) / (freq + 0.5) + 1)

    def score(self, query):
        """Score all documents against query"""
        query_tokens = self.tokenize(query)
        scores = []

        for idx, doc in enumerate(self.corpus):
            score = 0
            doc_len = self.doc_lengths[idx]
            term_freqs = defaultdict(int)
            for word in doc:
                term_freqs[word] += 1

            for token in query_tokens:
                if token in self.idf:
                    tf = term_freqs[token]
                    idf = self.idf[token]
                    numerator = tf * (self.k1 + 1)
                    denominator = tf + self.k1 * (1 - self.b + self.b * doc_len / self.avgdl)
                    score += idf * numerator / denominator

            scores.append((idx, score))

        return sorted(scores, key=lambda x: x[1], reverse=True)


# ============ DOCUMENT LOADING ============
def _load_from_source(source_dir, source_key):
    """Load all .md files from a specific source directory (rl or cn)."""
    docs = []
    if not source_dir.exists():
        return docs

    for file in source_dir.rglob("*.md"):
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                category = file.parent.name
                # Build enriched search text: include source key, category, filename, content
                hinted_content = (
                    f"{source_key} {SOURCE_LABELS[source_key]} "
                    f"{category.replace('-', ' ')} {file.stem.replace('-', ' ')} "
                    f"{content}"
                )
                docs.append({
                    "source": source_key,
                    "source_label": SOURCE_LABELS[source_key],
                    "path": str(file.relative_to(LIBRARY_DIR.parent)),
                    "name": file.name,
                    "category": category,
                    "content": content,
                    "search_text": hinted_content
                })
        except Exception:
            continue
    return docs


def _load_resources(source_filter=None):
    """
    Load components from all library sources.

    Args:
        source_filter: Optional 'rl' or 'cn' to restrict search to one source.

    Returns:
        List of document dicts, each tagged with 'source'.
    """
    docs = []

    if source_filter == "rl":
        docs = _load_from_source(RL_DIR, "rl")
    elif source_filter == "cn":
        docs = _load_from_source(CN_DIR, "cn")
    else:
        # Load both sources
        docs.extend(_load_from_source(RL_DIR, "rl"))
        docs.extend(_load_from_source(CN_DIR, "cn"))

    return docs


# ============ SEARCH API ============
def search(query, max_results=MAX_RESULTS, source_filter=None):
    """
    Search components using BM25 across both library sources (rl + cn).

    Args:
        query:         Natural language search string.
        max_results:   Maximum number of results to return.
        source_filter: Optional 'rl' or 'cn' to restrict to one source.

    Returns:
        Dict with keys: query, count, source_filter, results
    """
    docs = _load_resources(source_filter=source_filter)
    if not docs:
        return {"error": "No component resources found in library/rl or library/cn."}

    documents = [doc["search_text"] for doc in docs]
    bm25 = BM25()
    bm25.fit(documents)
    ranked = bm25.score(query)

    results = []
    for idx, score in ranked[:max_results]:
        if score > 0:
            doc = docs[idx]
            results.append({
                "source": doc["source"],
                "source_label": doc["source_label"],
                "path": doc["path"],
                "file": doc["name"],
                "category": doc["category"],
                "content": doc["content"],
                "score": round(score, 2)
            })

    return {
        "query": query,
        "source_filter": source_filter or "all (rl + cn)",
        "count": len(results),
        "results": results
    }


def list_categories(source_filter=None):
    """
    List all available categories across sources.

    Args:
        source_filter: Optional 'rl' or 'cn'.

    Returns:
        Dict mapping source -> sorted list of categories.
    """
    docs = _load_resources(source_filter=source_filter)
    by_source = defaultdict(set)
    for doc in docs:
        by_source[doc["source"]].add(doc["category"])

    return {k: sorted(v) for k, v in by_source.items()}
