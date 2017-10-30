'use strict';

const bear = require('../index');

describe("bear.growl", function() {
  it("returns grr", function() {
    expect(bear.growl()).toBe('grr');
  });
});
