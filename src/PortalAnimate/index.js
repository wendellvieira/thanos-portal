import AnimateParticlesPortal from './AnimateParticlesPortal'
import AnimateParticlesSmoke from './AnimateParticlesSmoke'

export async function PortalAnimate(Setup){
    const Delta = Setup.Clock.getDelta();

    await AnimateParticlesPortal(Setup.PortalParticles, Delta);
    await AnimateParticlesSmoke(Setup.SmokeParticles, Delta);

    if( Math.random() > 0.9){
        Setup.PortalLight.power = 350 + Math.random() * 500;
    }

    Setup.render();

    requestAnimationFrame( () => PortalAnimate(Setup) );
}