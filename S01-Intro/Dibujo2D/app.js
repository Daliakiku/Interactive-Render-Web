// 1. obtener referencia del canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(canvas);


//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d"); //ctx = context

//LINE
//3. Definir los estilos de la linea
ctx.beginPath(); //Iniciar el trazo
ctx.strokeStyle = "red";
ctx.lineWidth = 10; 

//4. Definir los puntos que hacen la linea
ctx.moveTo(50, 50); 
ctx.lineTo(200, 50);

ctx.moveTo(50, 200); 
ctx.lineTo(200, 200);

ctx.moveTo(50, 350);
ctx.lineTo(200, 350);


//5. Renderizar la linea
ctx.stroke(); //ctx.endStroke() is not needed, as stroke() already ends the path

//RECTANGLE
//6. define styles of rectangle
ctx.beginPath(); // Start a new path
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.fillStyle = "rgb(255, 0, 0)"; // Color with transparency

//7. Define the rectangle
ctx.rect(450, 10, 300, 100);

//8. Render the rectangle
ctx.fill();
ctx.stroke();


//CIRCLE
//9. Define styles of the circle
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.fillStyle = "rgb(0, 255, 0)"; // Fill color with transparency

//10. Define the circle
ctx.ellipse(400, 300, 100, 100, 0, 0, 2 * Math.PI); // x, y, radiusX, radiusY, rotation, startAngle, endAngle
//2 * pi = 360 degrees, 1 * pi = 180 degrees (half circle)

//11. Render the circle
ctx.fill();
ctx.stroke();