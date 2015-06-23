"use strict";

var game = game || {};

game.runner = function(spec){
    var that = {};
    var document = spec.document;
    var counter = document.getElementById('counter');
    var tRex = document.getElementById('t-rex');

    var number = 0;

    that.go = function(window) {
        function gameLoop() {
            counter.innerHTML = number;
            number++;

            tRex.style.left = number + "px";
        }

        var framesPerSecond = 1000 / 60;
        window.setInterval(gameLoop, framesPerSecond);
    };

    return that;
};