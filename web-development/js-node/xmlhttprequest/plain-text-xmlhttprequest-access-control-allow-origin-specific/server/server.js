/*
 * node server with router logic
    npm start
 */
var http = require('http');
var router = require('node-router')();
var accessControlAllowOrigin = 'http://0.0.0.0:2534';

var genericHandler = function(
  request /* incoming request */,
  response /* outgoing response */,
  next /* next matching handler */
) {
};

var rootHandler = function(request, response, next) {
  if (request.path === '/') {
    response.setHeader('access-control-allow-origin', accessControlAllowOrigin);
    response.send(200, 'this is root');
  } else {
    next();
  }
};
router.push('GET', '/', rootHandler);

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
