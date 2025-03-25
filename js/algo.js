
document.addEventListener("DOMContentLoaded", function () {
    const sceneEl = document.querySelector('a-scene');
    let arSystem;
    sceneEl.addEventListener('loaded', function () {
        arSystem = sceneEl.systems["mindar-face-system"];
    });
    const boton_empezar = document.querySelector("#boton_empezar");
    const boton_stop = document.querySelector("#boton_stop");
    const boton_cambiar_camara = document.querySelector("#boton_cambiar_camara");
    // arReady event triggered when ready
    sceneEl.addEventListener("arReady", (event) => {
        console.log("ar ready");
    });
    // detect target found
    sceneEl.addEventListener("targetFound", event => {
        console.log("target found");
    });
    // detect target lost
    sceneEl.addEventListener("targetLost", event => {
        console.log("target lost");
    });
    // arError event triggered when something went wrong. Mostly browser compatbility issue
    sceneEl.addEventListener("arError", (event) => {
        console.log("ar error");
    });
    boton_empezar.addEventListener('click', () => {
        arSystem.start(); // start AR 
    });
    boton_stop.addEventListener('click', () => {
        arSystem.stop(); // stop
    });
    boton_cambiar_camara.addEventListener('click', () => {
        arSystem.switchCamera();
    });
});