
const canvas = document.getElementById("lienzo"); //canvas is defined by the program, we call on it
const ctx = canvas.getContext("2d");

console.log(ctx);  

//set resolution of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 

//FUNCTION
// function drawCircle (x, y){
//     ctx.beginPath(); 
//     ctx.strokeStyle = "orange";
//     ctx.lineWidth = 10;
//     ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
//     ctx.stroke(); 
// }
// drawCircle(200, 200);

//OBJECT
const circle = { //create object and its attributes/properties
    colorLine: "purple",
    lineWidth: 20,
    radius: 100,
    rotation: 0,
    startAngle: 0,
    endAngle: Math.PI * 2,
    x: 0, 
    y: 0,
    draw: function(x, y) { //make a method
        ctx.beginPath(); 
        ctx.strokeStyle = circle.colorLine;
        ctx.lineWidth = circle.lineWidth;
        ctx.ellipse(x, y, circle.radius, circle.radius, circle.rotation, circle.startAngle, circle.endAngle);
        ctx.stroke();
    }
}

window.addEventListener("mousedown", function(eventData){
    circle.draw(eventData.x, eventData.y); //call the method to draw the circle where the mouse is clicked
});
//circle.draw(200, 200); //call the method to draw the circle