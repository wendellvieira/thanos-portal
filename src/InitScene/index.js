import InitSceneLight from './InitSceneLight'
import InitPortalLight from './InitPortalLight'
import InitCamera from './InitCamera'
import InitRenderer from './InitRenderer'

export default function(){
    const Setup = {}
    Setup.Scene = new THREE.Scene();

    // Iniciando Luzes
    InitSceneLight(Setup.Scene);
    InitPortalLight(Setup.Scene);
    
    InitCamera(Setup); // Inicialização da camera
    InitRenderer(Setup); // Inicialização do renderer

    return Setup;
}