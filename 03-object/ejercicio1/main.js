
const canvas = document.getElementById("lienzo"); //canvas is defined by the program, we call on it
const ctx = canvas.getContext("2d");

console.log(ctx);  

//set resolution of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight; 


function drawCircle (x, y){
    ctx.beginPath(); 
    ctx.strokeStyle = "green";
    ctx.lineWidth = 10;
    ctx.ellipse(x, y, 60, 60, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, startAngle, endAngle
    ctx.stroke(); 
}

drawCircle(200, 200);

//listen for mouse movement to draw circles
window.addEventListener("mousemove", function(eventData){ //eventData is an object we create to contains information about the event. It could be called anything
    //the function is only accessible within the event listener, and doesn't need a name (but you can put a name if you want)
    drawCircle(eventData.x, eventData.y);
    console.log(eventData.x, eventData.y); //log mouse position
});