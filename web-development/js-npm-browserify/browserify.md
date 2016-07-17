#browserify

<http://browserify.org/>

## Problem
1. We want to use `require` and npm packages with browsers, but vanilla JS doesn't understand
   `requrie`; it doesn't know how to traverse the `node_modules` directory tree to resolve
   dependencies.
2. even if it does, there are too many files involved. They need to be consolidated into one file.

## Solution
Use browserify to compile a JS file that contains the keyword `require`, to one that doesn't contain
`require`, and serve that one to browser.

## demo
1. `npm i`
2. `./node_modules/browserify/bin/cmd.js main.js -o bundle.js`
3. `open index.html`

##### or simply (after npm install)
- `npm start`

Notice that it alerts **1,2,3,4**
