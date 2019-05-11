import InitSceneLight from './InitScene/InitSceneLight'
import InitPortalLight from './InitScene/InitPortalLight'


function InitScene(){
    let scene = new THREE.Scene();

    // Iniciando Luzes
    InitSceneLight(scene);
    InitPortalLight(scene);
}

InitScene();