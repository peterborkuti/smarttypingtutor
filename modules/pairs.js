/**
 * Module representing a character-pairs.
 * @module pairs
 */
define(function() {
    var pairs = [];
    var chars = [];

    var add = function(char) {
       //if this char is already added, exiting
       if (chars.indexOf(char) !== -1) {
        return [];
       }

       //adds the new character
       chars.push(char);

       //adds the pairs based on this new character and the previouses
       var pairsIndex = pairs.length;
       chars.forEach(function(e){
            pairs.push(e + char);
            if (e !== char) {
                pairs.push(char + e);
            }
       });

       return pairs.slice(pairsIndex);
    };

    var get = function() {
        //do not let array escape
        return pairs.slice();
    }

    var getChars = function() {
        //do not let array escape
        return chars.slice();
    }

    var clear = function() {
        pairs = [];
        chars = [];
    }

    return /** @alias module:pairs */ {
        /** gets the character pairs in an array */
        'get': get,
        /** adds pairs based on the parameter character */
        'add': add,
        /** alias for get */
        'getPairs': get,
        /** gets the characters in an array which were added */
        'getChars': getChars,
        /** deletes all the stored pairs and characters "reset button" */
        'clear' : clear
    }

});