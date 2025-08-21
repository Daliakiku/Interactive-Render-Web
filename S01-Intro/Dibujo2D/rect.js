// 1. obtener referencia del canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

//dimention variable
var width = 300;
var height = 100;

console.log(canvas);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;

//ctx.moveTo(canvas.width / 2 - width, canvas.height / 2 - height);
ctx.rect(canvas.width/2-width, canvas.height/2-height, width*2, height*2);
//ctx.rect(canvas.width / 2 + width, canvas.height / 2 - height, canvas.width / 2 - width, canvas.height / 2 - height);

ctx.stroke();