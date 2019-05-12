export default function(PortalParticles, Delta){
    return new Promise( (Response, Reject) => {
        PortalParticles.forEach( Particle => {
            Particle.rotation.z -= Delta * 1.5;
        })
        Response();
    });
}