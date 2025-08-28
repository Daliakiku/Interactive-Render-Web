console.log("Hello, world!");
console.log(gsap);


//window.addEventListener("mousedown", function(eventData) {
    gsap.to(
        ".rectangle", //element to control
        {
            y: window.outerHeight - 100,
            duration: 2, //duration of the animation in seconds
            ease: "bounce.out", //type of easing (bounce.inOut)
            onComplete: function() {
                console.log("Animation completed!");
                
                }
            }
    );

//});