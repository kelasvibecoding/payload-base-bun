#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Vibe Blocks Search - CLI for components
Usage: python search.py "<query>" [--max-results 3]
"""

import argparse
import json
import sys
from core import search, MAX_RESULTS

def format_output(result):
    """Format results for the user (token-optimized)"""
    if "error" in result:
        return f"Error: {result['error']}"

    if result['count'] == 0:
        return f"## Vibe Blocks Search\n**Query:** {result['query']}\n\n*No components found matching your query.*"

    output = []
    output.append(f"## Vibe Blocks Search")
    output.append(f"**Query:** {result['query']} | **Found:** {result['count']} results\n")

    for i, res in enumerate(result['results'], 1):
        output.append(f"### Result {i}: {res['category']} / {res['file']}")
        output.append(f"*(Path: `{res['path']}` | Relevance: {res['score']})*")
        
        # Extract metadata and title from content
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
            # Truncate description if too long
            desc_text = description.strip()
            if len(desc_text) > 300:
                desc_text = desc_text[:297] + "..."
            output.append(desc_text)
            
        output.append(f"\n*Use `view_file` on the path above to read the full source code.*")
        output.append("\n---\n")

    return "\n".join(output)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Vibe Blocks Search")
    parser.add_argument("query", help="Search query")
    parser.add_argument("--max-results", "-n", type=int, default=MAX_RESULTS, help="Max results (default: 3)")
    parser.add_argument("--json", action="store_true", help="Output as JSON")

    args = parser.parse_args()

    result = search(args.query, args.max_results)

    if args.json:
        print(json.dumps(result, indent=2, ensure_ascii=False))
    else:
        print(format_output(result))
