/*
 * Multiple js files are hard to manage. A sophisticated web application usually has a large number
 * of
 * js files to include. The usage of `<script>` tags is not enough to handle this.
 *
 * Luckily, webpack is here to help. It compiles js files, including their dependencies, into a
 * single
 * js file. Webpack can do the same to css files and even image assets.
    npm start
 * or
    webpack ./src.js bundle.js; open index.html
 */

var bear = require('json!./resources/bear.json');
alert(bear.name);
