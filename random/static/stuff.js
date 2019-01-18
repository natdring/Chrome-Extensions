var c = document.getElementById("myCanvas");
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
drawCircle();
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


var side = 1;
var coinButton = document.getElementById('coinButton');
var count = 0;
coinButton.onclick = function flip() {
    count++;
    document.getElementById("coinButton").textContent="Flip #"+count;
    side = Math.floor(Math.random() * 2) + 1;
    ctx.clearRect(0, 0, c.width, c.height);

    if(side==1){
        drawCircle();
        drawH();
    }
    if(side==2){
        drawCircle();
        drawT();
        
    }
    
}