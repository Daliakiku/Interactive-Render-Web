console.log("Hello from main.js!");
console.log(THREE);


const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//scene, camera, mesh, renderer

//scene
const scene = new THREE.Scene();

//camera   
const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.1, 1000);
//field of view, aspect ratio, where the camera starts to render, and where it stops rendering

//mesh
//we need geometry and material to create a mesh
const geometry = new THREE.TorusKnotGeometry(); //can be left blank
//sphere (radius, widthSegments, heightSegments)
const material = new THREE.MeshNormalMaterial({flatShading: true}); //can be left blank

// //MATCAPS
// const textureLoader = new THREE.TextureLoader();
// var matcapMaterial;
// var mesh;

// var matcapMap = textureLoader.load('./textures/matcap1.png', function(texture){
//     console.log("Texture loaded", texture);
//     //create the material
//     //give the texture to the material
//     //create the mesh giving it the geometry and material
//     //add the mesh to the scene
// });

const textureLoader = new THREE.TextureLoader();
var matcapMaterial;
var mesh;
var matcapMap = textureLoader.load(
  // Textura URL
  './textures/matcap1.png',
  // on Load callback
  function (texture) {
      matcapMaterial = new THREE.MeshMatcapMaterial( { matcap: texture } );
      // Mesh.
      mesh = new THREE.Mesh( geometry, matcapMaterial );
      // 3. Poner objeto en la escena.
      scene.add(mesh);
      mesh.position.z = -8;
      // 4. Activar animación.
      animate();
  },
  // on Progress (no funciona por ahora)
  undefined,
  // on Error callback
  function (error) { console.error("Algo salio mal con la textura,", error); }
);




//Render
const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(canvas.width, canvas.height);

//Give instruction to print the first frame
renderer.render(scene, camera);

function animate (){
    requestAnimationFrame(animate); //calls the animate function at 60fps
    mesh.rotation.x += 0.01; //rotate the mesh
    mesh.rotation.y += 0.01; //rotate the mesh
    renderer.render(scene, camera); //render the scene
}

//animate();





