import PortalCreate from './PortalCreate'
import SmokeCreate from './SmokeCreate'

export default function(Setup){
    let loader = new THREE.TextureLoader();

    loader.load("statics/images/smoke.png", function(texture){
        PortalCreate(texture, Setup);
        SmokeCreate(texture, Setup);
    });

    Setup.Clock = new THREE.Clock();
}