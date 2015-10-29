define(['js/config', 'js/output', 'js/generator'], function(config, output, generator){

    var inp = document.getElementById(config.dom.inputId);
    var prevChar = '';
    var prevTime;

    var listenerKeypress = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var char = String.fromCharCode(key);
        var time = new Date().getTime();

        output.pressedChar(prevChar, char, prevTime, time);
        prevChar = char;
        prevTime = time;

        var index = output.getIndex();
        if ((index > 0) && (index % config.bunchLength) === 0) {
            output.addBunch(generator.getBunch());
        }

        console.log(char, new Date().getTime());
    }

    var start = function(addBunchFn, pressedCharFn) {
        output.clear();
        output.addBunch(generator.getBunch());
        output.addBunch(generator.getBunch());
        inp.addEventListener("keypress", listenerKeypress);
    }

    var stop = function() {
        inp.addEventListener("keypress", listenerKeypress);
    }

    return {
        'start': start,
        'stop': stop
    }
});