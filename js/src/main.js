var counter = document.getElementById('counter');
var tRex = document.getElementById('moving-t-rex');

var positionX = 0;
var positionY = 0;

var speedX = 5;
var speedY = 5;

function gameLoop() {
    counter.innerHTML = "X: " + positionX + ", Y: " + positionY;
    tRex.style.left = positionX + "px";
    tRex.style.top = positionY + "px";

    positionX = positionX + speedX;
    positionY = positionY + speedY;
}

var framesPerSecond = 1000 / 60;
window.setInterval(gameLoop, framesPerSecond);
