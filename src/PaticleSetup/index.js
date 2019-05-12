import PortalCreate from './PortalCreate'
import SmokeCreate from './SmokeCreate'

export default function(Setup){
    return new Promise( (Resolve, Reject) => {
        let loader = new THREE.TextureLoader();
    
        loader.load("statics/images/smoke.png", async function(texture){
            await PortalCreate(texture, Setup);
            await SmokeCreate(texture, Setup);
            Setup.Clock = new THREE.Clock();
            Resolve();
        });
    });
}