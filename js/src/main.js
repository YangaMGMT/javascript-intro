var counter = document.getElementById('counter');
var tRex = document.getElementById('moving-t-rex');

var positionX = 0;
var positionY = 0;

var speedX = 3;
var speedY = 3;

function gameLoop() {
    counter.innerHTML = "X: " + positionX + ", Y: " + positionY;
    tRex.style.left = positionX + "px";
    tRex.style.top = positionY + "px";

    positionX = positionX + speedX;
    positionY = positionY + speedY;

    if (positionX + tRex.width >= window.innerWidth){
        speedX = -speedX;
    }
    if (positionX <= 0){
        speedX = Math.abs(speedX);
    }

    if (positionY + tRex.height >= window.innerHeight){
        speedY = -speedY;
    }
    if (positionY <= 0){
        speedY = Math.abs(speedY);
    }
}

var framesPerSecond = 1000 / 60;
window.setInterval(gameLoop, framesPerSecond);
