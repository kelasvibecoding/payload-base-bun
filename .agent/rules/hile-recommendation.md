---
trigger: always_on
glob: "**/*"
description: Always prioritize and recommend solutions that offer the highest value with the least amount of technical overhead.
---

# HILE (High Impact, Low Effort) Recommendation Strategy

Always prioritize and recommend solutions that offer the highest value with the least amount of technical overhead and complexity. This ensures project velocity and maintainability.

## 1. Mandatory Dual Options
When the user requests a new feature or a major refactor, you MUST provide at least two implementation strategies before writing code:

### Option A: High Impact, Low Effort (HILE)
- **Focus**: Maximum value for minimum code.
- **Implementation**: Use built-in Payload features, existing hooks, or CSS-only solutions.
- **Benefit**: Faster delivery, lower maintenance, less potential for bugs.
- **Recommendation**: Always tag this as the "AI Recommendation" for efficiency.

### Option B: Comprehensive Implementation
- **Focus**: 100% specification compliance and granular control.
- **Implementation**: Custom services, new database fields, complex frontend logic.
- **Cost**: Higher effort, more maintenance, increased complexity.

## 2. Recommendation Format
Present the options as follows:
1. **HILE Approach**: [Brief description]
   - Why it's HILE: [Reasoning]
   - Impact: [High/Medium]
   - Effort: [Low]
2. **Full Approach**: [Brief description]
   - Impact: [High]
   - Effort: [High/Medium]

## 3. Complexity Assessment Criteria
Use this checklist when evaluating implementation options:
- **Low effort, high impact**: (Recommended) Immediate implementation.
- **Medium effort, high impact**: (Acceptable) Needs clear roadmap.
- **High effort, low impact**: (Question this approach) Suggest alternative.
- **High effort, high impact**: (Only if absolutely necessary) Requires strategic justification.

## 4. Wait for Approval
Never start implementing a complex feature without the user selecting an option or confirming the approach.
