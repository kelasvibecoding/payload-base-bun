---
name: docx-mastery
description: "Comprehensive document creation, editing, and analysis with support for tracked changes, comments, formatting preservation, and text extraction. Use when you need to: (1) Create new .docx files with docx-js, (2) Extract text via pandoc, (3) Manipulate OOXML for advanced editing, or (4) Implement tracked changes (redlining)."
---

# DOCX Mastery

Professional workflow for Microsoft Word document processing.

## 1. Decision Tree

- **Create New**: Use **docx-js** (TypeScript/Node.js).
- **Read/Analyze**: Use **pandoc** for markdown conversion.
- **Edit Existing**: Use **OOXML manipulation** (Python `Document` library or direct XML editing).
- **Formal Review**: Use the **Redlining Workflow** (Tracked Changes).

## 2. Text Extraction (Pandoc)
Convert to markdown to read content while preserving structure:
```bash
pandoc --track-changes=all input.docx -o output.md
```

## 3. Creating New Documents (docx-js)
Use the `docx` library in Node.js.
```typescript
import { Document, Packer, Paragraph, TextRun } from "docx";
const doc = new Document({
    sections: [{
        children: [
            new Paragraph({
                children: [
                    new TextRun("Hello World"),
                ],
            }),
        ],
    }],
});
```

## 4. Redlining Workflow (Tracked Changes)
**Mandatory for Legal/Official Docs**:
1. **Unpack**: Convert ZIP to XML.
2. **Minimal, Precise Edits**: Only mark the exact text that changes.
   - *Good*: `<w:r><w:t>The </w:t></w:r><w:del>old</w:del><w:ins>new</w:ins><w:r><w:t> text.</w:t></w:r>`
3. **Batch Changes**: Group 3-10 related changes together.
4. **Repack**: Convert XML back to .docx.

## 5. Visual Analysis
Convert slides to images for inspection:
1. `soffice --headless --convert-to pdf document.docx`
2. `pdftoppm -jpeg -r 150 document.pdf page`
