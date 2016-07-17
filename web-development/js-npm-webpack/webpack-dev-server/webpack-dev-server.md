# webpack-dev-server

## Problem and solution
Multiple js files are hard to manage. A sophisticated web application usually has a large number of
js files to include. The usage of `<script>` tags is not enough to handle this.

Luckily, webpack is here to help. It compiles js files, including their dependencies, into a single
js file. Webpack can do the same to css files and even image assets.

### webpack-dev-server
##### Problem and solution
Running **npm start** every time after a change is annoying!

Use **webpack-dev-server**. It saves us the need to <c-c> on npm start and run it again.

##### demo and explanation
- `npm i`
- `npm start`
- visit `http://localhost:8080/`
- update `src.js`
- go back to browser, refresh `http://localhost:8080/` and notice the update

Curiously, notice that npm start doesn't actually provide an output file, and it is safe to
physically delete **bundle.js** file (I have already done that). But
<http://localhost:8080/bundle.js> is accessible.

This means **webpack-dev-server** automatically generate and serve bundle.js.
