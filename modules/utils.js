define(function(){

/**
 * http://bost.ocks.org/mike/shuffle/compare.html
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */


var shuffle = function(array, randomFunc) {
  randomFunc = randomFunc || Math.random;
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(randomFunc() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

return {

    'shuffle' : shuffle

}


});