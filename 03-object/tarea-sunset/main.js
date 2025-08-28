
//console.log(gsap);



gsap.registerPlugin(MotionPathPlugin);

gsap.to("#sun", {duration: 5, motionPath: "#path"});


