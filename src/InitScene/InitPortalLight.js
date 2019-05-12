export default function(Setup){
    let PortalLight = new THREE.PointLight(0x062d89, 30, 350, 1.7);
    PortalLight.position.set(0, 0, 250);
    Setup.Scene.add( PortalLight );
    Setup.PortalLight = PortalLight;
}