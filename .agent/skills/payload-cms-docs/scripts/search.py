#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Payload CMS Docs Search - CLI for documentation
Usage: python search.py "<query>" [--max-results 2]
"""

import argparse
import json
from core import search, MAX_RESULTS

def format_output(result):
    """Format results for the user (token-optimized)"""
    if "error" in result:
        return f"Error: {result['error']}"

    output = []
    output.append(f"## Payload CMS Docs Search")
    output.append(f"**Query:** {result['query']} | **Found:** {result['count']} results\n")

    for i, res in enumerate(result['results'], 1):
        output.append(f"### Result {i}: {res['file']}")
        output.append(f"*(Relevance Score: {res['score']})*")
        content = res['content']
        # If content is too long, we might want to truncate, but usually for docs 
        # the user needs the whole context. We'll show the whole content but keep max results low.
        output.append("\n```markdown")
        output.append(content)
        output.append("```\n")

    return "\n".join(output)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Payload CMS Docs Search")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--max-results", "-n", type=int, default=MAX_RESULTS, help="Max results (default: 2)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")

    args = parser.parse_args()

    result = search(args.query, args.max_results)

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print(format_output(result))
