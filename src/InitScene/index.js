import InitSceneLight from './InitSceneLight'
import InitPortalLight from './InitPortalLight'
import InitCamera from './InitCamera'
import InitRenderer from './InitRenderer'

export default function(Setup){
    return new Promise((Response, Reject) => {
        // Definindo as configurações inicias
        Setup.Clock = null;
        Setup.SmokeParticles = [];
        Setup.PortalParticles = [];    
        Setup.Scene = new THREE.Scene();
    
        // Iniciando Luzes
        InitSceneLight(Setup.Scene);
        InitPortalLight(Setup);
        
        InitCamera(Setup); // Inicialização da camera
        InitRenderer(Setup); // Inicialização do renderer

        Response();
    });


}