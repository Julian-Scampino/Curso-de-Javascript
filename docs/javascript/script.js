let nuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"))
nuevoUsuario.correctas = 0
document.querySelector(".nav-user-text").innerText = `${nuevoUsuario.nombre} ${nuevoUsuario.apellido}`
document.querySelector(".header-btn-logout").addEventListener("click", ()=>{
    localStorage.clear()
    window.location.href = "./secciones/registrar.html"
})
// --------------------------------------- Matematica --------------------------------------- //
// ---- Calculadora ---- //
let calculadora = document.getElementById("calculadora")
calculadora.addEventListener('submit', (event) =>{
    event.preventDefault()
    let calculadoraValor1 = parseFloat(document.getElementById('calculadoraValor1').value)
    let operador = event.submitter.value
    let calculadoraValor2 = parseFloat(document.getElementById('calculadoraValor2').value)
    let resultadoCalculadora
    switch(operador) {
        case "+":
            resultadoCalculadora = calculadoraValor1+calculadoraValor2
          break;
        case "-":
            resultadoCalculadora = calculadoraValor1-calculadoraValor2
          break;
        case "/":
            resultadoCalculadora = calculadoraValor1/calculadoraValor2
          break;
        case "x":
            resultadoCalculadora = calculadoraValor1*calculadoraValor2
        break;
    }
    let textoResultadoCalculadora = document.getElementById("textoResultadoCalculadora")
    if(resultadoCalculadora == "" || isNaN(resultadoCalculadora)){
        textoResultadoCalculadora.innerText = `error`
    } else{
        textoResultadoCalculadora.innerText = `  = ${resultadoCalculadora}`
    }
    calculadora.reset()
})

// ---- Preguntas Matematica ---- //
let preguntasMate = Array.from(document.getElementsByClassName('preguntasMate'))
let respuestasMate = ["9", "2", "3", "15"]
preguntasMate.forEach((element, index) =>{
    element.addEventListener('submit', (event) =>{
        event.preventDefault()
        if(event.target[0].value == respuestasMate[index]){
            correcto(event.target[0])
            toast ()
        } else{
            incorrecto(event.target[0])
        }
    })
})

// --------------------------------------- Lengua --------------------------------------- //
// ---- Practica ---- // 
let historiaPersonal = document.getElementById('historiaPersonal')
historiaPersonal.addEventListener('submit', (event) => {
    event.preventDefault()
    let sustantivo1 = document.getElementById('sustantivo').value
    let adjetivo1 = document.getElementById('adjetivo').value
    let verbo1 = document.getElementById('verbo').value
    let historiaPersonalTexto = document.getElementById('historiaPersonalTexto')
    historiaPersonalTexto.innerHTML = `Hola. Mi nombre es <span class="lengua-historiaPersonal">${sustantivo1}</span> (sustantivo). Soy una persona <span class="lengua-historiaPersonal">${adjetivo1}</span> (adjetivo). Me gusta mucho <span class="lengua-historiaPersonal">${verbo1}</span> (verbo).`
    historiaPersonal.reset()
})
// ---- Preguntas sustantivos, verbo, adjetivos ---- //
let preguntasLengua = Array.from(document.getElementsByClassName('preguntasLengua'))
let respuestasLengua = ["verbo", "verbo", "sustantivo", "adjetivo", "sustantivo"]
preguntasLengua.forEach((element, index) =>{
    element.addEventListener('change', () =>{
        if((element.value).toLowerCase() == respuestasLengua[index]){
            correcto(element)
            toast ()
        } else{
            incorrecto(element)
        }
    })
})

// --------------------------------------- Banderas --------------------------------------- //
let valorColor
let botonBlanco = document.getElementById('botonBlanco')
botonBlanco.addEventListener('click', () =>{
    valorColor = "colorBlanco"
})
let botonCeleste = document.getElementById('botonCeleste')
botonCeleste.addEventListener('click', () =>{
    valorColor = "colorCeleste"
})
let botonAmarillo = document.getElementById('botonAmarillo')
botonAmarillo.addEventListener('click', () =>{
    valorColor = "colorAmarillo"
})
let botonRojo = document.getElementById('botonRojo')
botonRojo.addEventListener('click', () =>{
    valorColor = "colorRojo"
})
let botonVerde = document.getElementById('botonVerde')
botonVerde.addEventListener('click', () =>{
    valorColor = "colorVerde"
})
let botonRosa= document.getElementById('botonRosa')
botonRosa.addEventListener('click', () =>{
    valorColor = "colorRosa"
})
// Bloquee la opcion de colorear por default.Esto desbloquea la posibilidad de colorear las banderas luego que se hace click en algun color
let botonesColores = document.querySelectorAll(".botonesColores")
Array.from(botonesColores).forEach((element, index)=>{
    element.addEventListener('click',(event)=>{
        document.querySelector("#contenedorDeBanderas").style.pointerEvents = "auto";
        botonesColores.forEach((element2)=>{
            element2.style.opacity = "50%"
        })
        element.style.opacity = "100%"
        
    })
})

let respuestasArgentina = ["cajasArgentina colorCeleste", "cajasArgentina colorBlanco",  "cajasArgentina colorCeleste"]
let cajasArgentina = Array.from(document.getElementsByClassName("cajasArgentina"))
cajasArgentina.forEach((element, index) =>{
    element.addEventListener('click', () =>{
        element.classList.add(valorColor)
        if(element.classList == respuestasArgentina[index]){
            element.classList.add("coloresBien")
            toast ()
        }else{
            element.classList.add("coloresMal")
        }
    })
})

let respuestasChile = ["cajasChile colorCeleste", "cajasChile colorBlanco", "cajasChile colorRojo", "cajasChile colorRojo"]
let cajasChile = Array.from(document.getElementsByClassName("cajasChile"))
cajasChile.forEach((element, index) =>{
    element.addEventListener('click', () =>{
        element.classList.add(valorColor)
        if(element.classList == respuestasChile[index]){
            element.classList.add("coloresBien")
            toast ()
        }else{
            element.classList.add("coloresMal")
        }
    })
})

let respuestasItalia = ["cajasItalia colorVerde", "cajasItalia colorBlanco", "cajasItalia colorRojo"]
let cajasItalia = Array.from(document.getElementsByClassName("cajasItalia"))
cajasItalia.forEach((element, index) =>{
    element.addEventListener('click', () =>{
        element.classList.add(valorColor)
        if(element.classList == respuestasItalia[index]){
            element.classList.add("coloresBien")
            toast ()
        }else{
            element.classList.add("coloresMal")
        }
    })
})

// --------------------------------------- Historia --------------------------------------- //
let radios = document.querySelectorAll(".preguntasHistoria input")
let respuestasHistoria = ["Colon", 1810, "Virrey", 3]
radios.forEach((element) => {
    element.addEventListener('click', () => {
        let nameRadioSeleccionado = element.name
        let nombresRadios = Array.from(document.getElementsByName(nameRadioSeleccionado))
        nombresRadios.forEach((element) =>{
            element.classList.add("sinClick")
        })
        if(respuestasHistoria.some((el) => el == element.value)){
            element.classList.add("historiaCorrecto")
            toast ()
        }else{
            element.classList.add("historiaIncorrecto")
        }
    })
})
// --- Boton Final --- //
let botonFinal = document.getElementById("botonFinal")
botonFinal.addEventListener('click', (e) =>{
    localStorage.setItem("usuarioLocal", JSON.stringify(nuevoUsuario))
})


// --- Funcion correcto --- //
function correcto (etiqueta){
    etiqueta.className = "bien"
    etiqueta.setAttribute('readonly', '')

}
// --- Funcion incorrecto --- //
function incorrecto (etiqueta){
    etiqueta.className = "mal"
    etiqueta.setAttribute('readonly', '')
}

// --- Toastify --- //
function toast (){
    Toastify({
        text: "Correcto",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
    nuevoUsuario.correctas++
}

