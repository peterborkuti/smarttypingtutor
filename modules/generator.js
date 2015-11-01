define(['js/config', 'modules/pairs', 'modules/utils'], function(config, pairs, utils) {
    var goalMillis = 666; // 180 character/minute
    var maxMillis = 10 * goalMillis;
    var letters = config.letters;
    //sample number for moving median
    var sampleNumber = 5;
    var timedPairs = {};
    //movingMedian of time for pairs
    var mmTimes = {};

    var getBunch = function() {
        var bunch = [];
        var p = pairs.get();

        for (var i = 0; (i < p.length) && (bunch.length < config.bunchLength / 2); i++) {
            var pair = p[i];

            if (!mmTimes[pair] || (mmTimes[pair] > goalMillis)) {
                bunch.push(pair.split(''));
            }
        };

        if (bunch.length === 0) {
            //All the generated pairs are learnt weel enough. Let's choose the
            //next letter and create pairs with it!
            var newPairs = pairs.add(letters[pairs.getChars().length]);
            newPairs.forEach(function(e) {
                bunch.push(e.split(''));
            });
        };

        utils.shuffle(bunch);

        //copy of bunch
        var b = bunch.slice();

        //has bunch enough elements?
        while (bunch.length < (config.bunchLength / 2)) {
            //bunch is not lengthy enough
            //concatenate the same elements to it in random order
            utils.shuffle(b);
            bunch = bunch.concat(b);
        }

       //return bunch in an appropriate size
       return bunch.slice(0, config.bunchLength / 2);
    }

    var pressedChar = function(prevGood, good, prevChar, char, dTime) {
        console.log(prevGood, good, prevChar, char, dTime);
        if (!good || !prevGood || dTime > maxMillis) {
            console.log("skip");
            return;
        }

            // press was good and the previous press was also good 
            // so we have a pair of pressed keys and the time of the two
            // presses

            var pair = prevChar + char;
            var tPair = timedPairs[pair];

            console.log(pair, tPair);

            //check if this press-pair was stored
            if (!tPair) {
                console.log("new pair");
                //this is the first pair-press
                timedPairs[pair] = [];
                tPair = timedPairs[pair];
                //The medianTimes should be counted if we have enough sample
                //so for now it is the biggest number
                //(this pair will be choosen with very big probability)
                mmTimes[pair] = Number.MAX_VALUE;
            };


            tPair.push(dTime);

            if (tPair.length > sampleNumber) {
                //we have more than necessary time-data
                //let's forget the unnecessary old ones
                var copyTPair = tPair.slice(0, sampleNumber);
                timedPairs[pair] = copyTPair;

                //Because here we have enough data for calculating
                //the moving median, let's calculate it!

                //sort should not modify the stored timedPairs
                var sorted = copyTPair.slice().sort();

                //simple moving median is the value in the middle in a sorted
                //array. See: https://en.wikipedia.org/wiki/Moving_average
                mmTimes[pair] = sorted[Math.floor(sampleNumber / 2)];
                console.log("mmTimes[pair]",mmTimes[pair]);
            }
    }

    pairs.add(letters[0]);
    pairs.add(letters[1]);

    return {
        'getBunch' : getBunch,
        'pressedChar' : pressedChar
    }

});