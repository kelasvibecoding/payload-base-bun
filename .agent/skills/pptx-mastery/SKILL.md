---
name: pptx-mastery
description: "Presentation creation, editing, and analysis. Use when you need to: (1) Create new presentations via html2pptx, (2) Analyze template styles and layouts, or (3) Programmatically edit .pptx files via OOXML."
---

# PPTX Mastery

Professional workflows for PowerPoint presentation engineering.

## 1. Design Principles (Non-Negotiable)
Before writing any code, **state your design approach**:
- **Tone**: Match the tone to the industry (e.g., Corporate vs. Creative).
- **Branding**: Identify colors and fonts to be used.
- **Hierarchy**: Use extreme contrast (e.g., 72pt Head vs 11pt Body).

## 2. Creation Workflow (html2pptx)
This is the preferred method for pixel-perfect positioning.
1. **Design in HTML**: Create slides with fixed dimensions (e.g., 720pt x 405pt).
2. **Rasterize Assets**: Convert gradients/complex SVGs to PNGs via `sharp` before inserting.
3. **Convert**: Use the `html2pptx.js` script to render HTML to PowerPoint.
4. **Thumbnail Check**: Generate thumbnails (`scripts/thumbnail.py`) to verify text isn't cut off.

## 3. Template Usage Workflow
If working with a client template:
1. **Inventory**: Create a `template-inventory.md` by analyzing thumbnails.
2. **Rearrange**: Use `rearrange.py` to duplicate/delete slides into the target order.
3. **Replace**: Generate a `replacement-text.json` mapping slide/shape IDs to new content.
4. **Pack**: Rebuild the ZIP package.

## 4. Visual Analysis
To extract text representation for analysis:
```bash
python -m markitdown input.pptx
```
