(function(){
    var OutChars = function(boundingBoxId) {
                var chars = [];
                var charIndex = -1;
                var bBox = document.getElementById(boundingBoxId);

                var add = function (style, chr) {
                    var id = 'char' + chars.length;
                    var t = '<span id="' + id + '"></span>';
                    var obj = document.createElement('SPAN');
                    obj.innerText = chr;
                    obj.style = style;
                    obj.id = id;
                    chars.push({ 'obj': obj, 'style': style, 'char': chr});
                    bBox.appendChild(obj);
                };

                var get = function(index) {
                    if (index >= 0 && index < chars.length) {
                        return chars[index];
                    }
                    return null;
                };

                var set = function(index, style, chr) {
                    if (index >= 0 && index < chars.length) {
                        var c = chars[index];
                        c['style'] = style;
                        c['char'] = chr;
                        c['obj'].innerText = chr;
                        c['obj'].style = style;
                    }
                };

                var circularSet = function(style, chr) {
                    charIndex++;
                    if (charIndex >= chars.length) {
                        charIndex = 0;
                    };
                    set(charIndex, style, chr);
                };

                return {
                    'add' : add,
                    'get' : get,
                    'set' : set,
                    'circularSet' : circularSet
                }
    };
    var inp = document.getElementById('inp');
    var out = document.getElementById('out');
    var outChars = OutChars('out');

    var listenerKeypress = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var char = String.fromCharCode(key);
        outChars.circularSet('past', char);
        console.log(new Date().getTime());

    }

    var generateOutputPlacers = function() {
        for (var i = 0; i < 15; i++) {
            outChars.add('future', ' ');
        }
    }

    var init = function() {
        inp.addEventListener("keypress", listenerKeypress);
        generateOutputPlacers();
    }


    init();
})();