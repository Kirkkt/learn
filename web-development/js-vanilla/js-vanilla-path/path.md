# path
## demo
- `node path.js`
    - both work
- `cd ..; node path/path.js`
    - only the good one works

## Problem
A javascript file may need to read another file, say, via `require('fs')` for instance, but
the path is by default treated by node as relative to the directory where you run node.

By default, the directory represented by '.' is the directory where node is run,
but not where the file resides

For example, `node js/path.js` and `cd js; node path.js` may yield two different results.

## Solution
`require('path')` then use `__dirname`, which represents the *current* directory, which is the
directory where the file itself is located.
