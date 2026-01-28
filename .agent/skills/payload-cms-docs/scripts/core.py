#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Payload CMS Docs Search Core - BM25 search engine for documentation
"""

import os
import re
from pathlib import Path
from math import log
from collections import defaultdict

# ============ CONFIGURATION ============
RESOURCES_DIR = Path(__file__).parent.parent / "resources"
MAX_RESULTS = 2

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


# ============ SEARCH FUNCTIONS ============
def _load_resources():
    """Load all markdown files from resources directory"""
    docs = []
    if not RESOURCES_DIR.exists():
        return docs

    for file in RESOURCES_DIR.glob("*.md"):
        try:
            with open(file, 'r', encoding='utf-8') as f:
                content = f.read()
                # Use filename as a hint in the content for better matching
                hinted_content = f"{file.stem.replace('-', ' ')} {content}"
                docs.append({
                    "name": file.name,
                    "stem": file.stem,
                    "content": content,
                    "search_text": hinted_content
                })
        except Exception:
            continue
    return docs


def search(query, max_results=MAX_RESULTS):
    """Search documentation using BM25"""
    docs = _load_resources()
    if not docs:
        return {"error": "No documentation resources found."}

    # Index everything
    documents = [doc["search_text"] for doc in docs]
    bm25 = BM25()
    bm25.fit(documents)
    ranked = bm25.score(query)

    results = []
    for idx, score in ranked[:max_results]:
        if score > 0:
            doc = docs[idx]
            results.append({
                "file": doc["name"],
                "content": doc["content"],
                "score": round(score, 2)
            })

    return {
        "query": query,
        "count": len(results),
        "results": results
    }
