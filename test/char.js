'use strict';

//How to use requirejs(for using AMDs) and mocha:
//http://stackoverflow.com/questions/20473614/mocha-requirejs-amd-testing

requirejs.config({
    baseUrl: '/',
    nodeRequire: require
});


describe('char', function() {
  var char;
  var assert = chai.assert;

  //Needs to load module before any tests
  before(function(done) {
      requirejs(['js/char'],
        function(mod) {
            char = mod;

            done();
      });
  });

  describe('#constructor', function () {
    it('should create a char object', function () {
      var c = char('id1', 'x');

      assert.isObject(c);
      assert.equal('future',c.className);
      assert.equal('SPAN', c.nodeName);
      assert.equal('id1', c.id);
      assert.equal('x', c.innerText);
    });
    it('should set style', function () {
      var c = char('id1', 'x');
      c.good();
      assert.equal('good', c.className);
      c.missed();
      assert.equal('missed', c.className);
      c.actual();
      assert.equal('actual', c.className);
    });
    it('should create different objects', function () {
      var c1 = char('id1', 'x');
      var c2 = char('id2', 'y');
      assert.equal('x', c1.innerText);
      assert.equal('y', c2.innerText);
      c1.good();
      assert.equal('good', c1.className);
      assert.equal('future', c2.className);
    });
  });
});