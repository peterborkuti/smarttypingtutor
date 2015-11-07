define(['config'], function(config) {

    var missed = function() {
        this.className = 'missed'
    }

    var actual = function() {
        this.className = 'actual'
    }

    var good = function() {
        this.className = 'good'
    }

    return function(id, chr) {
        var obj = document.createElement('SPAN');
        obj.innerText = chr;
        obj.className = 'future';
        obj.id = id;
        obj.missed = missed;
        obj.actual = actual;
        obj.good = good;

        return obj;
    }
})