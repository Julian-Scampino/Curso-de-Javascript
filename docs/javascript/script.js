let nuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"))
nuevoUsuario.correctas = 0
nuevoUsuario.fin = false
document.querySelector(".nav-user-text").innerText = `${nuevoUsuario.nombre}`
document.querySelector("#header-avatar").src =`./imagenes/avatar-${nuevoUsuario.genero}-cambiado-chico100px.png`
document.querySelector(".header-btn-logout").addEventListener("click", ()=>{
    localStorage.clear()
    window.location.href = "./secciones/registrar.html"
})
// --------------------------------------- Matematica --------------------------------------- //
// ---- Calculadora ---- //
let calculadora = document.getElementById("calculadora")
calculadora.addEventListener('submit', (event) =>{
    event.preventDefault();
	let valoresCalculadora = {};
	for (let [key, value] of new FormData(event.target)) {
		valoresCalculadora[key] = Number(value);
	}
	let {num1, num2} = valoresCalculadora;
	let operador = event.submitter.value;
	let resultadoCalculadora;
    switch(operador) {
        case "+":
            resultadoCalculadora = num1+num2
          break;
        case "-":
            resultadoCalculadora = num1-num2
          break;
        case "/":
            resultadoCalculadora = num1/num2
          break;
        case "x":
            resultadoCalculadora = num1*num2
        break;
    }
    let textoResultadoCalculadora = document.getElementById("textoResultadoCalculadora")
    if(resultadoCalculadora == "" || isNaN(resultadoCalculadora)){
        textoResultadoCalculadora.innerText = `error`
    } else{
        textoResultadoCalculadora.innerText = `${num1} ${operador} ${num2} \n = ${resultadoCalculadora }`
    }
    calculadora.reset()
})

// ---- Preguntas Matematica ---- //
let preguntasMate = document.querySelectorAll('.preguntasMate')
let respuestasMate = ["9", "2", "3", "15"]
preguntasMate.forEach((element, index) =>{
    element.addEventListener('submit', (event) =>{
        event.preventDefault()
        if(event.target[0].value == respuestasMate[index]){
            event.target[0].className = "bien"
            event.target[0].setAttribute('readonly', '')
            correcto(event.target[0])
        } else{
            event.target[0].className = "mal"
            event.target[0].setAttribute('readonly', '')
            incorrecto(event.target[0])
        }
        event.target.style.pointerEvents = "none"
    })
})

// --------------------------------------- Lengua --------------------------------------- //
// ---- Practica ---- // 
let formHistoriaPersonal = document.getElementById('historiaPersonal')
formHistoriaPersonal.addEventListener('submit', (event) => {
    event.preventDefault();
	let valoresHistoriaPersonal = {};
	for (let [key, value] of new FormData(event.target)) {
		valoresHistoriaPersonal[key] = value;
	}
	let {sustantivo, adjetivo, verbo} = valoresHistoriaPersonal;
	let historiaPersonalTexto = document.getElementById("historiaPersonalTexto");
    historiaPersonalTexto.innerHTML = `Hola. Mi nombre es <span class="lengua-historiaPersonal">${sustantivo}</span> (sustantivo). Soy una persona <span class="lengua-historiaPersonal">${adjetivo}</span> (adjetivo). Me gusta mucho <span class="lengua-historiaPersonal">${verbo}</span> (verbo).`
    formHistoriaPersonal.reset()
})
// ---- Preguntas sustantivos, verbo, adjetivos ---- //
let preguntasLengua = document.querySelectorAll('.preguntasLengua')
let respuestasLengua = ["verbo", "verbo", "sustantivo", "adjetivo", "sustantivo"]
preguntasLengua.forEach((element, index) =>{
    element.addEventListener('change', () =>{
        if((element.value).toLowerCase() == respuestasLengua[index]){
            element.className = "bien"
            element.setAttribute('readonly', '')
            correcto (element)
        } else{
            element.className = "mal"
            element.setAttribute('readonly', '')
            incorrecto(element)
        }
    })
})

// --------------------------------------- Banderas --------------------------------------- //
//La linea de abajo es para almacenar globalmente el color del boton y ser usado en otra parte
let valorColor
// Bloquee la opcion de colorear por default.Esto desbloquea la posibilidad de colorear las banderas luego que se hace click en algun color
let botonesColores = document.querySelectorAll(".botonesColores")
botonesColores.forEach((element1)=>{
    element1.addEventListener('click',(event)=>{
        //Nueva linea la de abajo por agregar data atributo
        valorColor = event.target.dataset.banderaBotonColor
        document.querySelector("#contenedorDeBanderas").style.pointerEvents = "auto";
        botonesColores.forEach((element2)=>{
            element2.style.opacity = "50%"
            element2.classList.remove("boton-color-animacion")  
        })
        element1.style.opacity = "100%"
        element1.classList.toggle("boton-color-animacion")  
        
    })
})
let cajasBanderaColor = document.querySelectorAll('.cajasBanderaColor')
cajasBanderaColor.forEach((element)=>{
    element.addEventListener('click', (event) =>{
        console.dir(element.dataset);
        console.dir(event.target.dataset);
        // Esto es por si hace 'click' en el svg de adentro aunque por las dudas le pude en css pointer-events: none;
        if(event.target.tagName == 'DIV'){
            let dato = event.target.dataset.banderaCajaColor
            //Esto es para que coincida con lo que esta escrito en el css
            element.classList.add('color' + valorColor.charAt(0).toUpperCase() + valorColor.slice(1))
            if(dato == valorColor){
                console.dir(element.dataset);
                console.dir(event.target.dataset);
                element.classList.add("coloresBien")
                correcto (element)
            }else{
                console.dir(element.dataset);
                console.dir(event.target.dataset);
                element.classList.add("coloresMal")
                incorrecto(element)
            }
        }
    //Usar esto para terminar y bloquear los botones de colorear cuando todo esta completado
    let countHecho = Array.from(cajasBanderaColor).filter(item => item?.dataset?.hecho == 'true').length;
    if(countHecho == cajasBanderaColor.length){
        botonesColores.forEach((elementBoton, index)=>{
            elementBoton.style.opacity = "50%"
            elementBoton.classList.remove("boton-color-animacion")
        })
        document.querySelector("#contenedorBotonesColores").style.pointerEvents = "none";
    }
    })
})
// --------------------------------------- Historia --------------------------------------- //
let radios = document.querySelectorAll(".preguntasHistoria input")
let respuestasHistoria = ["Colon", 1810, "Virrey", 3]
radios.forEach((element) => {
    element.addEventListener('click', () => {
        let nameRadioSeleccionado = element.name
        // Deshabilita todos radios del mismo grupo por el name
        let nombresRadios = document.getElementsByName(nameRadioSeleccionado)
        nombresRadios.forEach((element) =>{
            element.classList.add("sinClick")
        })
        if(respuestasHistoria.some((el) => el == element.value)){
            element.classList.add("historiaCorrecto")
            correcto(element)
        }else{
            element.classList.add("historiaIncorrecto")
            incorrecto(element)
        }
    })
})
// --- Boton Final --- //
let botonFinal = document.getElementById("botonFinal")
botonFinal.addEventListener('click', (e) =>{
    let cantidadTotal = document.querySelectorAll("[data-tipo='pregunta']").length
    let cantidadBien = document.querySelectorAll("[data-estado='bien']").length
    let cantidadMal = document.querySelectorAll("[data-estado='mal']").length
    nuevoUsuario.fin = true
    nuevoUsuario.correctas = cantidadBien
    nuevoUsuario.incorrectas = cantidadMal
    nuevoUsuario.faltantes = (cantidadTotal - (cantidadBien + cantidadMal))
    localStorage.setItem("usuarioLocal", JSON.stringify(nuevoUsuario))
})
// Para que la animacion solo se ejecute cuando el elemento esta en la pantalla
const contenedorBotonFinalAnchor = document.querySelector('#contenedorBotonFinal a')
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            contenedorBotonFinalAnchor.classList.add('animacion-boton-final')
          return
        }
        contenedorBotonFinalAnchor.classList.remove('animacion-boton-final')
    });
});
observer.observe(contenedorBotonFinalAnchor);

// --- Toastify --- //
function correcto (element){
    Toastify({
        text: "Correcto",
        className: "info",
        style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    element.dataset.hecho="true"
    element.dataset.estado="bien"
    document.querySelector("#header-puntos").innerText = `Puntos: ${document.querySelectorAll("[data-estado='bien']").length}`
}
function incorrecto(element) {
    element.dataset.hecho="true"
    element.dataset.estado="mal"
}

