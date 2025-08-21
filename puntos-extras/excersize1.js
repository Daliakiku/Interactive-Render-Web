const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

//ctx.moveTo(canvas.width/2 - 100, canvas.height/2 - 100);

ctx.strokeStyle = "black";
ctx.lineWidth = 10;


ctx.beginPath();
ctx.moveTo(canvas.width/2 - 200, canvas.height/2 - 200);
ctx.lineTo(canvas.width/2 + 200, canvas.height/2 + 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width/2 + 200, canvas.height/2 - 200);
ctx.lineTo(canvas.width/2 - 200, canvas.height/2 + 200);
ctx.stroke();


ctx.beginPath();
ctx.moveTo(canvas.width/2, canvas.height/2 - 200);
ctx.lineTo(canvas.width/2, canvas.height/2 + 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width/2 - 200, canvas.height/2);
ctx.lineTo(canvas.width/2 + 200, canvas.height/2);
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = "white";
ctx.ellipse(canvas.width/2, canvas.height/2, 65, 65, 0, 0, Math.PI * 2);
ctx.stroke();