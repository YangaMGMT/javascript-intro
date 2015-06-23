var counter = document.getElementById('counter');
var tRex = document.getElementById('moving-t-rex');

var position = 0;

function gameLoop() {
    counter.innerHTML = position;
    tRex.style.left = position + "px";
    tRex.style.top = "300px";

    position = position + 2;
}

var framesPerSecond = 1000 / 60;
window.setInterval(gameLoop, framesPerSecond);
