import InitScene from './InitScene'
import ParticleSetup from './PaticleSetup'
import {PortalAnimate} from './PortalAnimate'

(async function(){
   const Setup = {};
   
   await InitScene(Setup);
   await ParticleSetup(Setup);
   PortalAnimate(Setup);

})();