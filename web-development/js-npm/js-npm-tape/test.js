var test = require('tape');
var Utils = require('./index.js');

test('returnTrue should returns true', function (assert) {
  assert.equal(Utils.returnTrue(), true);
  assert.end();
});
