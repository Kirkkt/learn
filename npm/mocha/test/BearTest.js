'use strict';

const bear = require('../Bear.js');
const assert = require('assert');

describe('bear growls', function() {
  it('when bear growls, it says grrr', function() {
    assert.strictEqual(bear.growl(), 'grrr');
  });
  it('when bear runs, it says I am a bear and I am running', function() {
    assert.strictEqual(bear.run(), 'I am a bear and I am running');
  });
});
