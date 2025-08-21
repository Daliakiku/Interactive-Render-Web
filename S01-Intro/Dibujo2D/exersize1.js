// 1. obtener referencia del canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

//variables
var width = canvas.width - 100;
var height = canvas.height - 50;

//set background
ctx.beginPath();
ctx.fillStyle = "rgb(222, 216, 195)"; // Background color
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.strokeStyle = "black";
ctx.lineWidth = 2;

//FIRST LINE

ctx.beginPath();
ctx.arc(50, 100, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(50, height/10 - 68);
ctx.stroke();

ctx.beginPath();
ctx.arc(218, 100, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(218, height/10 + 101);
ctx.stroke();

ctx.beginPath();
ctx.arc(303, 16, height/10, 0, Math.PI * -1);
ctx.lineTo(height/10 + 303, 16);
ctx.stroke();

ctx.beginPath();
ctx.arc(303, 184, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(height/10 + 303, 184);
ctx.stroke();

ctx.beginPath();
ctx.arc(388, 100, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(388, height/10 - 68);
ctx.stroke();

ctx.beginPath();
ctx.arc(556, 100, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(556, 100, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(724, 100, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(724, height/10 + 101);
ctx.stroke();


//SECOND LINE

ctx.beginPath();
ctx.arc(134, 185, height/10, 0, Math.PI * -1);
ctx.lineTo(height/10 + 134, 185);
ctx.stroke();

ctx.beginPath();
ctx.arc(134, 353, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(50, 353);
ctx.stroke();

ctx.beginPath();
ctx.arc(303, 185, height/10, 0, Math.PI * -1);
ctx.stroke();

ctx.beginPath();
ctx.arc(303, 353, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(50, 353);
ctx.stroke();

ctx.beginPath();
ctx.arc(388, 269, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(388, height/10 - 68);
ctx.stroke();

ctx.beginPath();
ctx.arc(556, 268, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(556, 268 + 84);
ctx.stroke();

ctx.beginPath();
ctx.arc(640, 184, height/10, 0, Math.PI * -1);
ctx.lineTo(height/10 + 640, 185);
ctx.stroke();

ctx.beginPath();
ctx.arc(641, 351, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(641 - height/10, 351);
ctx.stroke();


//THIRD LINE
ctx.beginPath();
ctx.arc(51, 437, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(51, 350);
ctx.stroke();

ctx.beginPath();
ctx.arc(218, 437, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(218, height/10 + 437);
ctx.stroke();

ctx.beginPath();
ctx.arc(303, 437, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(304, 437, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(471, 353, height/10, 0, Math.PI * -1);
ctx.lineTo(555, 353);
ctx.stroke();

ctx.beginPath();
ctx.arc(471, 520, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(388, 520);
ctx.stroke();

ctx.beginPath();
ctx.arc(556, 436, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(556, 350);
ctx.stroke();

ctx.beginPath();
ctx.arc(724, 436, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(724, 520);
ctx.stroke();

//FOURTH LINE

ctx.beginPath();
ctx.arc(134, 521, height/10, 0, Math.PI * -1);
ctx.lineTo(218, 521);
ctx.stroke();

ctx.beginPath();
ctx.arc(134, 689, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(50, 689);
ctx.stroke();

ctx.beginPath();
ctx.arc(387, 605, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(219, 605, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(219, 521);
ctx.stroke();

ctx.beginPath();
ctx.arc(555, 605, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(555, 689);
ctx.stroke();

ctx.beginPath();
ctx.arc(387, 605, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(640, 520, height/10, 0, Math.PI * -1);
ctx.lineTo(height/10 + 640, 520);
ctx.stroke();

ctx.beginPath();
ctx.arc(641, 688, height/10, Math.PI, Math.PI * 2);
ctx.stroke();

//FIFTH LINE

ctx.beginPath();
ctx.arc(130, 773, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(130, 773, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.stroke();

ctx.beginPath();
ctx.arc(301, 688, height/10, 0, Math.PI * -1);
ctx.lineTo(389, 688);
ctx.stroke();

ctx.beginPath();
ctx.arc(300, 855, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(216, 855);
ctx.stroke();

ctx.beginPath();
ctx.arc(555, 773, height/10, Math.PI * 0.5, Math.PI*1.5);
ctx.lineTo(555, 773 + height/10);
ctx.stroke();

ctx.beginPath();
ctx.arc(386, 773, height/10, Math.PI * -0.5, Math.PI*0.5);
ctx.lineTo(386, 688);
ctx.stroke();

ctx.beginPath();
ctx.arc(641, 687, height/10, 0, Math.PI * -1);
ctx.stroke();

ctx.beginPath();
ctx.arc(641, 856, height/10, Math.PI, Math.PI * 2);
ctx.lineTo(641 - height/10, 856);
ctx.stroke();