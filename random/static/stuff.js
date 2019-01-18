var c = document.getElementById("coin");
var ctx = c.getContext("2d");
var centerX = c.width / 2;
var centerY = c.height / 2;
function drawCircle() {
    ctx.beginPath();
    ctx.arc(centerX,centerY, 50, 0, 2 * Math.PI);
    ctx.fillStyle = '#ffd700';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#000000';
    ctx.stroke();
}
function drawT() {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.fillText("T", centerX-20, centerY+17);
    ctx.fill();
}
function drawH() {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.fillText("H", centerX-20, centerY+17);
    ctx.fill();
}


var coinSide = 1;
var coinButton = document.getElementById('coinButton');
var coinCount = 0;
coinButton.onclick = function flip() {
    coinCount++;
    document.getElementById("coinButton").textContent="Flip #"+coinCount;
    coinSide = Math.floor(Math.random() * 2) + 1;
    ctx.clearRect(0, 0, c.width, c.height);

    if(coinSide==1){
        drawCircle();
        drawH();
    }
    if(coinSide==2){
        drawCircle();
        drawT();
        
    }
    
}

function drawNum(diceSide) {
    ctx.font = "50px Comic Sans MS";
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.fillText(diceSide, centerX-15, centerY+17);
    ctx.fill();
}

var diceSide = 1;
var diceButton = document.getElementById('diceButton');
var diceCount = 0;
var diceLength = 100;
diceButton.onclick = function roll() {
    diceCount++;
    document.getElementById("diceButton").textContent="Roll #"+diceCount;
    diceSide = Math.floor(Math.random() * 6) + 1;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.lineWidth = 3;
    ctx.fillStyle = '#c2c2d6';
    ctx.fillRect(c.width/2 - diceLength/2, c.height/2 - diceLength/2, diceLength, diceLength);

    ctx.fillStyle = '#000000';
    ctx.rect(c.width/2 - diceLength/2, c.height/2 - diceLength/2, diceLength, diceLength);
    
    ctx.stroke();
    drawNum(diceSide);
    
}