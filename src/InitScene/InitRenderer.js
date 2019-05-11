export default function(Setup){
    let Renderer = new THREE.WebGLRenderer();
    Renderer.setClearColor(0x000000, 1);
    Renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( Renderer.domElement );

    Setup.render = () => Renderer.render( Setup.Scene, Setup.Camera );
}