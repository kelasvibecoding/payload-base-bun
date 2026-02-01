---
name: xlsx-mastery
description: "Comprehensive spreadsheet creation, editing, and analysis with support for formulas, formatting, and financial modeling. Use when you need to: (1) Create dynamic Excel models, (2) Analyze large datasets with pandas, or (3) Recalculate formula values programmatically."
---

# XLSX Mastery

Advanced spreadsheet engineering and financial modeling rules.

## 1. The Golden Rule: Use Formulas
**NEVER hardcode calculated values.**
- *Wrong*: `sheet['A3'] = 100` (Calculated in Python)
- *Correct*: `sheet['A3'] = '=SUM(A1:A2)'`
This ensures the model remains dynamic on the user's side.

## 2. Financial Modeling Standards (Industry Standard)
Unless otherwise specified, follow these color-coding rules:
- **Blue text**: Hardcoded inputs (user-changeable).
- **Black text**: Formulas and fixed calculations.
- **Green text**: Links to other sheets.
- **Red text**: External links to other files.
- **Yellow background**: Assumptions needing attention.

## 3. Formatting Standards
- **Negative Numbers**: Use parentheses `(123)`.
- **Zeros**: Use an em-dash `-` (via formatting).
- **Percentages**: Default to `0.0%`.
- **Currency**: Specify units in headers (e.g., "$mm").

## 4. Recalculation Workflow
Since libraries like `openpyxl` don't calculate formulas, you MUST use a recalculation bridge:
1. Save the file.
2. Run the `recalc.py` script (using headless LibreOffice).
3. Inspect the JSON output for `#REF!`, `#DIV/0!`, or `#VALUE!` errors.

## 5. Metadata for Hardcodes
Always document data sources in cell comments:
- `Source: [Document], [Date], [Reference]`
