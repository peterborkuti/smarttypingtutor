define(['js/config'], function() {
    var goalMillis = 333; // 180 character/minute
    var minMillis = 10 * goalMillis;

    var getBunch = function() {
        var bunch = [];
        for (var i = 0; i < 6; i++) {
            bunch.push([(Math.random()<0.5)?'j':'f']);
        }

        return bunch;
    }

    return {
        'getBunch' : getBunch
    }

});