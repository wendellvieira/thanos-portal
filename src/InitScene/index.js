import InitSceneLight from './InitSceneLight'
import InitPortalLight from './InitPortalLight'
import InitCamera from './InitCamera'
import InitRenderer from './InitRenderer'

export default function(){
    const Setup = {
        PortalParticles: [],
        SmokeParticles: [],
        Clock: null
    }
    Setup.Scene = new THREE.Scene();

    // Iniciando Luzes
    InitSceneLight(Setup.Scene);
    InitPortalLight(Setup.Scene);
    
    InitCamera(Setup); // Inicialização da camera
    InitRenderer(Setup); // Inicialização do renderer

    return Setup;
}