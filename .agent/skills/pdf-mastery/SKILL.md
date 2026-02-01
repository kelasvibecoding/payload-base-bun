---
name: pdf-mastery
description: "Comprehensive PDF manipulation toolkit for extracting text/tables, merging/splitting, and handling forms. Use when you need to: (1) Extract data from reports with pdfplumber, (2) Merge/Split PDFs with pypdf, (3) Generate PDFs with reportlab, or (4) Fill PDF forms."
---

# PDF Mastery

Expert toolkit for programmatic PDF processing.

## 1. Tool Selection

| Feature | Best Tool | Key Method |
| :--- | :--- | :--- |
| **Merge/Split** | `pypdf` | `PdfWriter.add_page()` |
| **Text Extraction** | `pdfplumber` | `page.extract_text()` |
| **Table Extraction** | `pdfplumber` | `page.extract_tables()` |
| **Creation (Simple)** | `reportlab` | `canvas.Canvas()` |
| **Creation (Complex)** | `pdf-lib` (JS) | High-level API |
| **OCR (Scanned)** | `pytesseract` | Must convert to Image first |

## 2. Extraction Patterns

### Tables to DataFrames
```python
import pdfplumber
import pandas as pd

with pdfplumber.open("doc.pdf") as pdf:
    table = pdf.pages[0].extract_table()
    df = pd.DataFrame(table[1:], columns=table[0])
```

## 3. Command Line Utilities
- **qpdf**: For merging without Python scripts:
  `qpdf --empty --pages f1.pdf f2.pdf -- merged.pdf`
- **pdftoppm**: For converting pages to images for analysis:
  `pdftoppm -jpeg -r 150 input.pdf page`

## 4. Filling Forms
Always identify field names first using `reader.get_fields()` before attempting to fill data.
