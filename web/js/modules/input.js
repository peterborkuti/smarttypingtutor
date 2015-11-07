define(['config', 'modules/output', 'modules/generator', 'modules/utils'], function(config, output, generator, utils){

    var inp = utils.getElement(config.dom.inputClass);
    var prevChar = '';
    var prevTime;
    var prevGood = false;

    var listenerKeypress = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var char = String.fromCharCode(key);
        var time = new Date().getTime();

        var good = output.pressedChar(char);
        generator.pressedChar(prevGood, good, prevChar, char, time - prevTime);
        prevChar = char;
        prevTime = time;
        prevGood = good;

        var index = output.getIndex();
        if ((index > 0) && (index % (config.bunchLength + 1)) === 0) {
            output.addBunch(generator.getBunch());
        }
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