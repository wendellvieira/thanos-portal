export default function( texture, Setup) {
    return new Promise( (Rsponse, Reject) => {
        const SmokeGeo = new THREE.PlaneBufferGeometry(1000, 1000);
        const SmokeMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true
        });
    
        for(let p = 0; p < 40; p++){
            let Particle = new THREE.Mesh(SmokeGeo, SmokeMaterial);
            Particle.position.set(
               Math.random() * 1000-500,
               Math.random() * 500-200,
               25
            );
            Particle.rotation.z = Math.random() * 360;
            Particle.material.opacity = 0.4;
            Setup.SmokeParticles.push(Particle)
            Setup.Scene.add(Particle);
        }

        Rsponse();

    });

}