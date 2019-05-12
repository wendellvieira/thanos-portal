export default function(SmokeParticles, Delta){
    return new Promise( (Response, Reject) => {
        SmokeParticles.forEach( Particle => {
            Particle.rotation.z -= Delta * 0.2;
        })
        Response();
    });
}