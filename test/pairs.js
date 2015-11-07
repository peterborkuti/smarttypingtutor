'use strict';

//How to use requirejs(for using AMDs) and mocha:
//http://stackoverflow.com/questions/20473614/mocha-requirejs-amd-testing

describe('Pairs', function() {
  var pairs;
  var assert = chai.assert;

  //Needs to load module before any tests
  before(function(done) {
      requirejs(['modules/pairs'],
        function(mod) {
            pairs = mod;
            done();
      });
  });

  describe('#get', function () {
    it('should return empty array at first', function () {
      assert.isArray(pairs.get());
      assert.equal(pairs.get().length, 0);
    });
    it('should return one pair', function () {
      pairs.add('x');
      assert.equal(pairs.get().length, 1);
      assert.sameMembers(pairs.get(), ['xx']);
    });
    it('should not add existing char', function () {
      pairs.add('x');
      assert.equal(1, pairs.get().length);
      assert.sameMembers(['xx'], pairs.get());
    });
    it('should return all pairs', function () {
      pairs.add('y');
      assert.equal(4, pairs.get().length);
      assert.sameMembers(['xx','yy','xy','yx'], pairs.get());
    });
  });

  describe('#clear', function() {
    it('should reset the object', function() {
        pairs.clear();
        assert.equal(pairs.get().length, 0);
        assert.equal(pairs.getChars().length, 0);
    });
  });

  describe('#add', function () {
    it('should return newly added pairs', function () {
      var newPairs = pairs.add('x');
      assert.equal(1, newPairs.length);
      assert.sameMembers(['xx'], newPairs);

      newPairs = pairs.add('x');
      assert.equal(0, newPairs.length);

      var newPairs = pairs.add('y');
      assert.equal(3, newPairs.length);
      assert.sameMembers(['yy','xy','yx'], newPairs);
    });
  });
});