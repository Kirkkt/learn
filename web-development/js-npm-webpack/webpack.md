# webpack

## Problem and solution
Multiple js files are hard to manage. A sophisticated web application usually has a large number of
js files to include. The usage of `<script>` tags is not enough to handle this.

Luckily, webpack is here to help. It compiles js files, including their dependencies, into a single
js file. Webpack can do the same to css files and even image assets.

### simple example with npm dependencies
See `simple-npm-deps` branch for demo.

    webpack {source_file} {bundle_file}: simply handles the dependencies elegantly

### simple example with local dependencies
See `simple-local-deps` branch for demo.

    module.exports = {object_to_export}: the simplest way to export
    require('{file_path'): the simplest way to require

### webpack-dev-server
##### Problem and solution
Running **npm start** every time after a change is annoying!

Use **webpack-dev-server**. It saves us the need to <c-c> on npm start and run it again.

##### demo and explanation
See `webpack-dev-server` branch for demo.

Curiously, notice that npm start doesn't actually provide an output file, and it is safe to
physically delete **bundle.js** file (I have already done that). But <http://localhost:8080/bundle.js>
is accessible.

This means **webpack-dev-server** automatically generate and serve bundle.js.
