#simple npm deps

## Problem and solution
Multiple js files are hard to manage. A sophisticated web application usually has a large number of
js files to include. The usage of `<script>` tags is not enough to handle this.

Luckily, webpack is here to help. It compiles js files, including their dependencies, into a single
js file. Webpack can do the same to css files and even image assets.

## demo and explanation
- `npm install`

### simple example with npm dependencies
- `npm start`

    webpack {source_file} {bundle_file}: simply handles the dependencies elegantly
