if (localStorage.getItem("usuarioLocal")) {
    window.location.href = "../index.html";
} else {
    Swal.fire("Hola soy Julián Scampino. Este es mi trabajo del curso de Javascript de Coder House. Está hecho con html, scss, Javascript");
    let nuevoUsuario = {};
    let formUsuario = document.getElementById("formUsuario");
    formUsuario.addEventListener("submit", (event) => {
        event.preventDefault();
        let formData = new FormData(formUsuario);
        let data = {}
        for (let [key, value] of formData) {
            nuevoUsuario[key] = value;
          }
          nuevoUsuario.correctas = 0;
        localStorage.setItem("usuarioLocal", JSON.stringify(nuevoUsuario));
        if (inputNombreUsuario != "" && inputApellidoUsuario != "") {
            window.location.href = "../index.html";
        }
    });
}
// Si se hace click en un avatar se selecciona el radio y se opaca el otro avatar
let contenedorAvatares = Array.from(document.getElementsByClassName("img-avatar-registrar"))
contenedorAvatares.forEach((element1, index1)=>{
    element1.addEventListener("click" , (elementClick)=>{
        elementClick.target.parentElement.parentElement.parentElement.children[1].checked = true
        contenedorAvatares.forEach((element2, index2)=>{
            element2.style.opacity = "50%"
        })
        elementClick.target.style.opacity = "100%"
        agitarShake(contenedorAvatares[index1])
    })
})
// Si se hace click en un radio se opaca el otro avatar
let radios = Array.from(document.getElementsByClassName("form-radio"))
radios.forEach((element1, index1)=>{
    element1.addEventListener("click" , (element2)=>{
        contenedorAvatares.forEach((element3, index3)=>{
            console.log(element3);
            element3.style.opacity = "50%"
        })
        contenedorAvatares[index1].style.opacity = "100%"
        agitarShake(contenedorAvatares[index1])
    })
})

// Funcion de: animacion de shaker, sacado de AI
const agitarShake = (elementoShake) =>{
    let keyframes = [
        { transform: "rotate(-5deg) translate(-5px, 0)" }, // left
        { transform: "rotate(5deg) translate(5px, 0)" }, // right
        { transform: "rotate(-5deg) translate(-5px, 0)" }, // left
        { transform: "rotate(5deg) translate(5px, 0)" }, // right
        { transform: "none" } // center
    ];
// Define the animation options
let options = {
    duration: 300, // milliseconds
    iterations: 1 // repeat forever
};
// Create and play the animation
elementoShake.animate(keyframes, options);

}
llamadoAConfetti()
setInterval(() => {
  //La funcion se llama 2 veces para evitar delay, una llamado sin intervalo de unica vez y otra con serInterval (importante que el codigo se ejecute despues de leer el codigo de la libreria para evitar errores, la libreria ya tiene un delay propio que es complicado cambiar)
  llamadoAConfetti()
  }, 1000);



  function llamadoAConfetti(){
//https://github.com/catdad/canvas-confetti
    //https://www.kirilv.com/canvas-confetti/
    var count = 200;
    var defaults = {
      origin: { y: 0 }, gravity: 1.5, spread: 0, decay: 10}
    
    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }
    
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }