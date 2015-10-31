requirejs.config({
    baseUrl: "/"
});

require(["modules/input"], function (input) {
    input.start();
});