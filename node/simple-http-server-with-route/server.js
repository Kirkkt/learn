/*
 * node server with router logic
    npm start
 */
var http = require('http');
var router = require('node-router')();

var genericHandler = function(
  request /* incoming request */,
  response /* outgoing response */,
  next /* next matching handler */
) {
};

var rootHandler = function(request, response, next) {
  if (request.path === '/') {
    response.send(200, 'this is root');
  } else {
    next();
  }
};
router.push('GET', '/', rootHandler);

var jsonHandler = function(request, response, next) {
  if (request.path !== '/json') {
    next();
  } else if (request.query.json === 'true') {
    response.send(200, {json: true});
  } else {
    response.send(200, {
      json: false,
      message: 'did you forget to include the `?json=true` query?',
    });
  }
};
router.push('GET', '/json', jsonHandler);

var htmlHandler = function(request, response, next) {
  const html = `
      <html>
          <head>
              <title>Quiz Wall</title>
          </head>
          <body>
              <div id="react-view"/>
              <div>
                <h1>this</h1>
                <b>is</b>
                <i>some</i>
                html
                <a href='#'>code</a>
              </div>
          </body>
      </html>
  `;
  response.end(html);
};
router.push('GET', '/html', htmlHandler);

var notFoundHandler = function(request, response, next) {
  response.send(404, 'page not found, try some other cool paths');
};
router.push(notFoundHandler);

var errorHandler = function(error, request, response, next) {
  response.send(error);
};
router.push(errorHandler);

var server = http.createServer(router).listen(2039);  // launch the server
console.log('node server is listening on http://0.0.0.0:2039');
