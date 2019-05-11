export default function(Setup){
    let Camera = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, 1, 10000);
    Camera.position.z = 1000;
    Setup.Scene.add(Camera);
    Setup.Camera = Camera;
}