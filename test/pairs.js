'use strict';

//How to use requirejs(for using AMDs) and mocha:
//http://stackoverflow.com/questions/20473614/mocha-requirejs-amd-testing

requirejs.config({
    baseUrl: '/',
    nodeRequire: require
});


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

  describe('#add', function () {
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
      assert.equal(pairs.get().length, 1);
      assert.sameMembers(pairs.get(), ['xx']);
    });
    it('should return pairs', function () {
      pairs.add('y');
      var p = pairs.get();
      assert.equal(p.length, 4);
      assert.sameMembers(p, ['xx','yy','xy','yx']);
    });
  });
});