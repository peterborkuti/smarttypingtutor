'use strict';

//How to use requirejs(for using AMDs) and mocha:
//http://stackoverflow.com/questions/20473614/mocha-requirejs-amd-testing

requirejs.config({
    baseUrl: '/',
    nodeRequire: require
});


describe('Utils', function() {
  var utils;
  var assert = chai.assert;

  var mockRandom = function() {
     return 0.5;
  }

  //Needs to load module before any tests
  before(function(done) {
      requirejs(['modules/utils'],
        function(mod) {
            utils = mod;
            done();
      });
  });

  describe('#shuffle', function () {
    it('should shuffle in place', function () {
      var array = [1,2,3,4,5];
      utils.shuffle(array, mockRandom);
      assert.isArray(array);
      assert.equal(array.length, 5);
      assert.sameMembers([1,2,3,4,5], array);
      assert.deepEqual([1,4,2,5,3], array);
    });

    it('should return the same array for 1 element', function () {
      var array = [1];
      utils.shuffle(array);
      assert.deepEqual([1], array);
    });
  });
});