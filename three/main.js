let scene, camera, renderer, cube;

function init(){
 scene = new THREE.Scene();
 
 camera = new THREE.PerspectiveCamera(
    75,
window.innerWidth / innerHeight,
    0.1,
    1000
);

 renderer = new THREE.WebGLRenderer({antialias: true});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

//const geometry = new THREE.BoxGeometry(1, 1, 1);
const geometry = new THREE.SphereGeometry(1, 64, 32);
//const material = new THREE.MeshBasicMaterial( {color: 0x000ff} );

const texture = new THREE.TextureLoader().load('textures/galaxy.jpg');
const material = new THREE.MeshBasicMaterial( { map: texture } );
 cube = new THREE.Mesh( geometry, material);
scene.add(cube);

camera.position.z = 2; 
}


function animate(){
    requestAnimationFrame(animate);

    //cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;


    renderer.render(scene, camera);
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false)

init();

animate();