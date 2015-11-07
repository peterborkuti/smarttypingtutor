define(['config'], function(config) {
    var timer;
    var delay = config.blink.delay;

    var blink = function() {
        var elements = document.getElementsByClassName('actual');

        if (!elements || elements.length === 0) {
            return;
        }

        var cursor = elements[0];

        var classes = cursor.className;

        if (classes.indexOf('blinkOff') !== -1) {
            classes = classes.replace('Off', 'On');
        }
        else if (classes.indexOf('blinkOn') !== -1) {
            classes = classes.replace('On', 'Off');
        }
        else {
            classes += ' blinkOn';
        }

        cursor.className = classes;
    }

    var start = function() {
        if (!timer) {
            timer = setInterval(blink, delay);
        }
    }

    var stop = function() {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
    }

    return {
        'startBlink' : start,
        'stopBlink' : stop
    }
});