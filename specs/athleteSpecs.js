var assert = require('assert');
var waterBottle = require('../waterBottle');
var athlete = require('../athlete');


describe('athlete', function() {
  it('should start hydrated', function(){
    assert.equal(100, athlete.hydration);
  });
  it('distance covered starts zero', function(){
    assert.equal(0, athlete.distanceCovered);
  });
  it('running increases distance', function(){
    athlete.run();
    assert.equal(10, athlete.distanceCovered);
  })
  it('running decreases hydration', function(){
    athlete.run();
    assert.equal(80, athlete.hydration);
  })
  it("can't run when dehydrated", function(){
    this.hydration = 0;
    athlete.run();
    assert.equal(20, athlete.distanceCovered);
  })

});