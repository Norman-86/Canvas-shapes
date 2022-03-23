let canvas = document.querySelector('#park');
let ctx = canvas.getContext('2d');
// ctx.moveTo(200, 50);
// ctx.lineTo(600, 300);
// ctx.closePath()
// ctx.lineTo(600, 100);
// ctx.stroke();
ctx.strokeStyle = '#008080';
ctx.lineWidth = 3;
ctx.strokeRect(100, 100, 400, 200);
ctx.strokeStyle = '#ff00ff';
ctx.strokeRect(400, 200, 400, 200);
ctx.fillStyle = '#add8e6'
ctx.fillRect(400, 200, 100, 100);
ctx.clearRect(425, 225, 50, 50);

ctx.strokeStyle = '#ffa500';
ctx.arc(500, 200, 150, 0, 2 * Math.PI);
ctx.stroke();