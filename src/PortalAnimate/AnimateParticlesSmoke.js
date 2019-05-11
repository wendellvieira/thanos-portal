export default function(SmokeParticles, Delta){
    SmokeParticles.forEach( Particle => {
        Particle.rotation.z -= Delta * 0.2;
    })
}