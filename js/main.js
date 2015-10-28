requirejs.config({
    baseUrl: "/"
});

require(["js/input","js/output", "js/generator"], function (input, output, generator) {
    var addBunch = function() {
        output.addBunch(generator.getBunch());
    };

    addBunch();
    addBunch();

    input.start(addBunch);
});