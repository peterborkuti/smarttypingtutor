requirejs.config({
    baseUrl: "/"
});

require(["js/input"], function (input) {
    input.start();
});