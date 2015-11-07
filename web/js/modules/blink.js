define(['config', 'modules/utils'], function(config, utils) {
    var CSS_CLASS_FRAGMENT_BLINK = 'blink';
    var CSS_CLASS_FRAGMENT_ON = 'On';
    var CSS_CLASS_FRAGMENT_OFF = 'Off';
    var CSS_CLASS_BLINKON = CSS_CLASS_FRAGMENT_BLINK + CSS_CLASS_FRAGMENT_ON;
    var CSS_CLASS_BLINKOFF = CSS_CLASS_FRAGMENT_BLINK + CSS_CLASS_FRAGMENT_OFF;
    var CSS_CLASS_ACTUAL_CHAR = 'actual';

    var timer;
    var delay = config.blink.delay;

    var blink = function() {
        var cursor = utils.getElement(CSS_CLASS_ACTUAL_CHAR);

        var classes = cursor.className;

        if (classes.indexOf(CSS_CLASS_BLINKON) !== -1) {
            classes = classes.replace(CSS_CLASS_FRAGMENT_OFF, CSS_CLASS_FRAGMENT_ON);
        }
        else if (classes.indexOf(CSS_CLASS_BLINKOFF) !== -1) {
            classes = classes.replace(CSS_CLASS_FRAGMENT_ON, CSS_CLASS_FRAGMENT_OFF);
        }
        else {
            classes += ' ' + CSS_CLASS_BLINKON;
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