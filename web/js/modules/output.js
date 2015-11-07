define(['config', 'modules/char', 'modules/utils'], function(config, char, utils) {
    var boundingBoxClass = config.dom.outputClass;

                var chars = [];
                var charIndex = -1;
                var bBox = utils.getElement(boundingBoxClass);

                var add = function (chr) {
                    var id = 'char' + chars.length;
                    var obj = char(id, chr);
                    if (chars.length === 0) {
                        obj.className = 'actual';
                    }
                    chars.push(obj);
                    bBox.appendChild(obj);
                };

                var pressedChar = function(char) {
                    charIndex++;
                    c = chars[charIndex];
                    var good = (char === c.innerText);
                    if (good) {
                        c.good();
                    }
                    else {
                        c.missed();
                    }
                    (chars[charIndex + 1]).actual();

                    return good;

                }

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
                        if (chr) {
                            c['char'] = chr;
                            c['obj'].innerText = chr;
                        };
                        c['obj'].style = style;
                    }
                };


                var addBunch = function(bunch) {
                    var endChar = ' ';

                    bunch.forEach(function(e) {
                        e.forEach(function(ee) {
                            add(ee);
                            if ((chars.length % config.lineLength) === 0) {
                                endChar = "\n";
                            };
                        });
                    });

                    add(endChar);
                };

                var clear = function() {
                    chars = [];
                    charIndex = -1;
                    bBox.innerHTML = '';
                }



                return {
                    'add' : add,
                    'get' : get,
                    'set' : set,
                    'addBunch' : addBunch,
                    'clear' : clear,
                    'getIndex' : function() { return charIndex; },
                    'pressedChar': pressedChar
                }

});