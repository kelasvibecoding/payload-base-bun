#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Vibe Blocks Search - CLI for UI components across rl + cn library sources.

Usage:
    python search.py "query string"
    python search.py "query string" --source rl
    python search.py "query string" --source cn
    python search.py "query string" --max-results 5
    python search.py --list-categories
    python search.py --list-categories --source cn
"""

import argparse
import json
import sys
from core import search, list_categories, MAX_RESULTS


def format_output(result):
    """Format results for the agent (token-optimized, source-aware)"""
    if "error" in result:
        return f"Error: {result['error']}"

    if result['count'] == 0:
        return (
            f"## Vibe Blocks Search\n"
            f"**Query:** {result['query']} | **Source:** {result['source_filter']}\n\n"
            f"*No components found matching your query.*"
        )

    output = []
    output.append("## Vibe Blocks Search")
    output.append(
        f"**Query:** {result['query']} | "
        f"**Source:** {result['source_filter']} | "
        f"**Found:** {result['count']} results\n"
    )

    for i, res in enumerate(result['results'], 1):
        output.append(f"### Result {i}: [{res['source'].upper()}] {res['category']} / {res['file']}")
        output.append(f"*(Source: `{res['source_label']}` | Path: `{res['path']}` | Relevance: {res['score']})*")

        # Parse metadata and description from content
        content_lines = res['content'].split('\n')
        title = "Unknown"
        metadata = ""
        description = ""
        in_metadata = False
        in_description = False

        for line in content_lines:
            if line.startswith('# '):
                title = line[2:]
            elif line.startswith('## Metadata'):
                in_metadata = True
                in_description = False
            elif line.startswith('## Description'):
                in_metadata = False
                in_description = True
            elif line.startswith('## Source Code'):
                break
            elif in_metadata and line.strip():
                metadata += line + "\n"
            elif in_description and line.strip():
                description += line + "\n"

        output.append(f"**Title:** {title}")
        if metadata:
            output.append("\n**Metadata:**")
            output.append(metadata.strip())
        if description:
            output.append("\n**Description:**")
            desc_text = description.strip()
            if len(desc_text) > 300:
                desc_text = desc_text[:297] + "..."
            output.append(desc_text)

        output.append(f"\n*Use `view_file` on the path above to read the full source code.*")
        output.append("\n---\n")

    return "\n".join(output)


def format_categories(categories_dict, source_filter=None):
    """Format category listing for display"""
    output = ["## Vibe Blocks — Available Categories\n"]
    for source_key in sorted(categories_dict.keys()):
        cats = categories_dict[source_key]
        source_label = "Relume Library (rl)" if source_key == "rl" else "Custom/Shadcn (cn)"
        output.append(f"### Source: `{source_key}` — {source_label} ({len(cats)} categories)")
        for cat in cats:
            output.append(f"  - `{cat}`")
        output.append("")
    return "\n".join(output)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(
        description="Vibe Blocks Search — search UI components from rl + cn sources.",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python search.py "hero with dark background"
  python search.py "pricing table" --source cn
  python search.py "feature grid" --source rl --max-results 5
  python search.py --list-categories
  python search.py --list-categories --source cn
        """
    )
    parser.add_argument("query", nargs="?", help="Search query string")
    parser.add_argument(
        "--source", "-s",
        choices=["rl", "cn"],
        default=None,
        help="Filter by library source: 'rl' (Relume) or 'cn' (Custom/Shadcn). Default: search both."
    )
    parser.add_argument(
        "--max-results", "-n",
        type=int,
        default=MAX_RESULTS,
        help=f"Max results to return (default: {MAX_RESULTS})"
    )
    parser.add_argument(
        "--list-categories",
        action="store_true",
        help="List all available categories across all sources."
    )
    parser.add_argument(
        "--json",
        action="store_true",
        help="Output raw JSON instead of formatted text."
    )

    args = parser.parse_args()

    # Handle --list-categories
    if args.list_categories:
        cats = list_categories(source_filter=args.source)
        if args.json:
            print(json.dumps(cats, indent=2, ensure_ascii=False))
        else:
            print(format_categories(cats, args.source))
        sys.exit(0)

    # Require query if not listing categories
    if not args.query:
        parser.error("A search query is required. Use --list-categories to browse without a query.")

    result = search(args.query, max_results=args.max_results, source_filter=args.source)

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print(format_output(result))
