import * as THREE from 'three';
import { MindARThree } from 'mindar-face-three';

document.addEventListener("DOMContentLoaded", function () {
    const boton_empezar = document.querySelector("#boton_empezar");
    const boton_stop = document.querySelector("#boton_stop");
    const boton_cambiar_camara = document.querySelector("#boton_cambiar_camara");

    // Inicializar MindAR
    const mindarThree = new MindARThree({
        container: document.querySelector("#container"),
    });
    const { renderer, scene, camera } = mindarThree;

    // Añadir iluminación
    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    scene.add(light);

    // Crear malla facial
    const faceMesh = mindarThree.addFaceMesh();
    const texture = new THREE.TextureLoader().load('assets/textures/ejemplo-textura.png');
    
    faceMesh.material.map = texture;
    faceMesh.material.transparent = true;
    faceMesh.material.needsUpdate = true;
    scene.add(faceMesh);

    // Función para iniciar
    const start = async () => {
        await mindarThree.start();
        renderer.setAnimationLoop(() => {
            renderer.render(scene, camera);
        });
    }

    // Eventos de los botones
    boton_empezar.addEventListener('click', () => {
        start();
    });
    
    boton_stop.addEventListener('click', () => {
        mindarThree.stop();
        renderer.setAnimationLoop(null);
    });
    
    boton_cambiar_camara.addEventListener('click', () => {
        mindarThree.switchCamera();
    });

    // Iniciar automáticamente (opcional)
    start();
});