---
description: Root cause analysis workflow for debugging and resolving errors systematically.
---

# /diagnose Workflow

Structured debugging using the 5-Whys methodology. Use when you encounter a bug, unexpected behavior, or a recurring error.

## 1. Error Capture

Collect the full context:
- Error message and stack trace
- File(s) and line number(s) involved
- Steps to reproduce
- Recent changes that may have caused it

## 2. Root Cause Analysis (5 Whys)

Ask "Why?" up to 5 times to find the root cause:

```
Problem: [Describe the symptom]
→ Why 1: [First cause]
  → Why 2: [Deeper cause]
    → Why 3: [Deeper cause]
      → Why 4: [Deeper cause]
        → Why 5 (Root): [The fundamental cause]
```

## 3. Impact Assessment

- Which files/features are affected?
- Is this a data integrity issue? A security issue?
- Does it affect users currently in production?

## 4. Action Plan

Present a clear fix plan to the user before making any changes:
- What will be changed
- Why this fixes the root cause
- What tests will verify the fix

**Wait for user approval before proceeding.**

## 5. Fix & Verify

1. Apply the approved fix
2. Verify the original error no longer occurs
3. Run `/lint-typecheck` to ensure no regressions
4. Summarize what was fixed and why
