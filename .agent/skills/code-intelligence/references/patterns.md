# Common ast-grep (sg) Patterns for Payload CMS

## 1. Field Search
Find all fields of a specific type:
```yaml
pattern: |
  {
    name: '$NAME',
    type: 'relationship',
    $$$REST
  }
```

## 2. Hook Analysis
Find all `beforeChange` hooks that are missing the `req` and `data` objects:
```yaml
pattern: "beforeChange: [ $$$HOOKS ]"
```

## 3. Access Control Audit
Find insecure "anyone" access:
```yaml
pattern: "read: () => true"
```

## 4. Relationship Depth
Find relationships with `maxDepth` set to a high value (potentially causing performance issues):
```yaml
pattern: "maxDepth: $DEPTH"
where:
  DEPTH:
    gt: 5
```

## 5. React Component Verification
Find components that use `useState` but are missing a corresponding `useEffect` for synchronization:
```yaml
pattern: |
  function $COMP($$$) {
    const [$STATE, $SETSTATE] = useState($$$);
    $$$
  }
where:
  not:
    has:
      pattern: "useEffect($$$)"
```

## 6. CSS Class Auditing
Find custom components using hardcoded tailwind colors (instead of project variables):
```yaml
pattern: 'className="$ATTR"'
where:
  ATTR:
    regex: "bg-(red|blue|green)-[0-9]+"
```

## 7. Payload Permission Logic
Identify fields that have a `read` access property but no `update` access property:
```yaml
pattern: |
  {
    name: '$NAME',
    access: {
      read: $READ,
    },
    $$$REST
  }
where:
  not:
    has:
      pattern: "update: $UPDATE"
```

## 8. SWR/Data Fetching Intelligence
Find all SWR calls that don't pass an error handler:
```yaml
pattern: "useSWR($KEY, $FETCHER)"
```
(Contrast this with ones that pass an options object).
