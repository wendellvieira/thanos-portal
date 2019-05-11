export default function(scene){
    let SceneLight = new THREE.DirectionalLight(0xffffff, 0.5);
    SceneLight.position.set(0, 0, 1);
    scene.add(SceneLight);
}