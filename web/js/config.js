define(function(){
    return {
        'dom': {
             /** DOM id of input element (input text) */
            'inputId' : 'inp',
             /** DOM id of output element */
            'outputId': 'out'
        },
        'lineLength': 6 * 10 + 9 + 1,
        'bunchLength' : 6,
        'generator' : {
            'letters' : 'fjdkslaéghrueiwoqptz',
            'goalMillis': 500,  // this sould be reached. The time between two keypresses
            'maxMillis': 10 * 500   // when this time reached between two keypresses, it will not take into account
                                    // because probably user is distracted from the program
        },
        'blink' : {
            'delay' : 250 /** cursor blink delay in millisecs */
        }
    }
});