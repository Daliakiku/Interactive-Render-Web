// 1. obtener referencia del canvas
const canvas = document.getElementById("lienzo");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = 150;
var height = 35;

//2. Definir si es 2D o 3D
const ctx = canvas.getContext("2d");

//draw background
ctx.fillStyle = "rgb(0, 0, 0)"; 
ctx.fillRect(0, 0, canvas.width, canvas.height);

//draw middle circle 
/*
ctx.beginPath();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.arc(canvas.width / 2, canvas.height / 2, width, 0, Math.PI * 2);
ctx.stroke();
*/



//listen to when mouse moves
window.addEventListener("mousemove", function (eventData) {

    //clear canvas
    //ctx.clearRect(0, 0, canvas.width, canvas.height);

    //draw background again
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.stroke();
    ctx.fill();
    

    //console.log("bussy X: " + eventData.clientX + " Y: " + eventData.clientY);

    for (let i = -5; i < 5; i++) {
        ctx.strokeStyle = "blue";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 + i * 30, width, 0, Math.PI * 2); //x, y, radius, start angle, end angle
        ctx.stroke();
    }

    ctx.beginPath();
    ctx.ellipse(eventData.clientX, eventData.clientY, width, width, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, start angle, end angle
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    ctx.stroke(); //draw the ellipse



}); //name of event to listen for, what will happen when event is "heard"

window.addEventListener("mousedown", function (eventData){
    console.log("mouse down");

       //clear canvas
       //ctx.clearRect(0, 0, canvas.width, canvas.height);

       //draw background again
       /*
       ctx.fillStyle = "rgb(0, 0, 0)";
       ctx.rect(0, 0, canvas.width, canvas.height);
       ctx.stroke();
       ctx.fill();
       */
      
       for (let i = -5; i < 5; i++) {
           ctx.strokeStyle = "green";
           ctx.lineWidth = 3;
           ctx.beginPath();
           ctx.arc(canvas.width / 2, canvas.height / 2 + i * 30, width, 0, Math.PI * 2); //x, y, radius, start angle, end angle
           ctx.stroke();
       }
   
       ctx.beginPath();
       ctx.ellipse(eventData.clientX, eventData.clientY, width, width, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, start angle, end angle
       ctx.strokeStyle = "pink";
       ctx.lineWidth = 3;
       ctx.stroke(); //draw the ellipse

});

window.addEventListener("mouseup", function (eventData){

    console.log("mouse up");

   //clear canvas
   //ctx.clearRect(0, 0, canvas.width, canvas.height);

   //draw background again
   /*
   ctx.fillStyle = "rgb(0, 0, 0)";
   ctx.rect(0, 0, canvas.width, canvas.height);
   ctx.stroke();
   ctx.fill();
   */
   

   for (let i = -5; i < 5; i++) {
       ctx.strokeStyle = "blue";
       ctx.lineWidth = 3;
       ctx.beginPath();
       ctx.arc(canvas.width / 2, canvas.height / 2 + i * 30, width, 0, Math.PI * 2); //x, y, radius, start angle, end angle
       ctx.stroke();
   }

   ctx.beginPath();
   ctx.ellipse(eventData.clientX, eventData.clientY, width, width, 0, 0, Math.PI * 2); //x, y, radiusX, radiusY, rotation, start angle, end angle
   ctx.strokeStyle = "red";
   ctx.lineWidth = 3;
   ctx.stroke(); //draw the ellipse
});



//reference button from html
const button = document.getElementById("button");
console.log(button);

//add an event listener to the button
button.addEventListener("mousedown", function(){
    console.log("button clicked");
    ctx.fillStyle = "rgb(252, 27, 27)";
    ctx.beginPath();
    ctx.rect(200, 100, 100, 50);
    ctx.fill();
});

//when button is clicked, change the color of the circles