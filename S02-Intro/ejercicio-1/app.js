console.log("wassup bitches");

//setup canvas
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//load image
var img = new Image();    //create image object
var path = "images/omg.jpg"    //set variable to reference image in folder

img.src = path;   // assign image from folder to object

img.onload = function(){
    console.log("Image loaded successfully");

    //image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height/2); //draw image on canvas
}

//render image
