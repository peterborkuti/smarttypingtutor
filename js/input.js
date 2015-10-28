define(['js/config', 'js/output'], function(config, output){

    var inp = document.getElementById(config.dom.inputId);

    var listenerKeypress = function(e) {
        var key = e.keyCode ? e.keyCode : e.which;
        var char = String.fromCharCode(key);
        output.circularSet('past', char);
        console.log(new Date().getTime());
    }

    var generateOutputPlacers = function() {
        for (var i = 0; i < 15; i++) {
            output.add('future', ' ');
        }
    }

    var init = function() {
        inp.addEventListener("keypress", listenerKeypress);
        generateOutputPlacers();
    }

    var start = function(addBunch) {

    }

    init();

    return 
});