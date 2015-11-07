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

/**
 * Creates a new element with the given properties or 'SPAN'
 *
 *
 */
var createElement = function(elementType, className, id, innerText) {
    var obj = document.createElement(elementType || 'SPAN');
    obj.innerText = innerText || '';
    obj.className = className || '';
    if (id) {
        obj.id = id;
    }

    return obj;
}

/**
 * Gets or creates a new element with the given classname
 * If there is no such an element, create a DIV with the given class
 * and appends it to the BODY
 *
 */
var getElement = function(className) {
  var elements = document.getElementsByClassName(className);

  if (!elements || elements.length === 0) {
      console.err('getElement: element does not exist, so create a div with class ' + className);
      var div = createElement('DIV', className);
      document.getElementsByTagname('BODY')[0].appendChild(div);

      return div;
  }

  return elements[0];
}

return {

    'shuffle' : shuffle,
    'getElement' : getElement,
    'createElement' : createElement

}


});