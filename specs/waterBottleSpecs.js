var assert = require('assert');
var waterBottle = require('../waterBottle');

describe('waterBottle', function() {
  it('should start empty', function(){
    assert.equal(0, waterBottle.contents);
  });

  it('should fill', function(){
    waterBottle.fill();
    assert.equal(100, waterBottle.contents);
  });

  it('contents should reduce when drunk', function(){
    waterBottle.drink();
    assert.equal(90, waterBottle.contents);
  });

  it('should empty', function(){
    waterBottle.empty();
    assert.equal(0, waterBottle.contents);
  });

  it("contents shouldn't go below zero", function(){
    waterBottle.contents = 9;
    waterBottle.drink();
    assert.equal(0, waterBottle.contents);
  });
});
