export default function( texture, Setup ){
    return new Promise( (Rsponse, Reject) => {
        const PortalGeo = new THREE.PlaneBufferGeometry(350, 350);
        const PortalMaterial = new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true
        });
    
        for(let p = 880; p > 250; p--){
            let Particle = new THREE.Mesh(PortalGeo, PortalMaterial);
            Particle.position.set(
                0.5 * p * Math.cos( (4 * p * Math.PI) / 180),
                0.5 * p * Math.sin( (4 * p * Math.PI) / 180),
                0.1 * p
            );
            Particle.rotation.z = Math.random() * 360;
            Setup.PortalParticles.push(Particle);
            Setup.Scene.add(Particle);
        }

        Rsponse();

    });
}