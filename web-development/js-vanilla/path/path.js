/*
 * by default, the directory represented by '.' is the directory where node is run,
 * but not where the file resides
 * both work:
    node path.js
 * only the good one works:
    cd ..; node path/path.js
 */
// bad, cd js; node path.js won't work
const path__dirname_bad = () => {
  require('fs').readFile('resources/bears.txt', 'utf-8', (error, file) => {
    console.log('file:\n' + file);
  });
};
// good, use __dirname to base the directory as relative to the directory where the file resides
const path__dirname_good = () => {
  require('path');
  require('fs').readFile(__dirname + '/resources/bears.txt', 'utf-8', (error, file) => {
    console.log('file:\n' + file);
  });
};
const path__dirname = () => {
  path__dirname_bad();
  path__dirname_good();
};
path__dirname();
