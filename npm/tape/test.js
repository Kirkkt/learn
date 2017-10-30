/**
  tape is a unit test suite, and zuul is a web interface for tap-based test suites, of which tape is
  one of.
 */
var test = require('tape');
var Utils = require('./index.js');

test('returnTrue should returns true', function (assert) {
  assert.equal(Utils.returnTrue(), true);
  assert.end();
});
