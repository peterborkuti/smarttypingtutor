/*
requirejs.config({
    baseUrl: ".."
});
*/

require(["modules/input", "modules/blink"], function (input, blink) {
    input.start();
    blink.startBlink();
});