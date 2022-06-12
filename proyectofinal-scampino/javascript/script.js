// ------ Formulario de Usuario ------ //
let nuevoUsuario = {}
let formUsuario = document.getElementById('formUsuario')
formUsuario.addEventListener('submit', (event) => {
    event.preventDefault()
    let inputNombreUsuario = (document.getElementById('inputNombreUsuario').value).split(' ')[0]
    let inputApellidoUsuario = (document.getElementById('inputNombreUsuario').value).split(' ')[0]
    nuevoUsuario.nombre=inputNombreUsuario;
    nuevoUsuario.apellido=inputApellidoUsuario;
    nuevoUsuario.correctas= 0;
    historiaPersonal.reset()
    if(inputNombreUsuario != "" && inputApellidoUsuario != "" ){
        document.getElementById("mainIndex").classList.remove("esconderseMain")
        document.getElementById("contenedorForm").classList.add("esconderseMain")
        document.getElementById("bodyIndex").classList.replace("formBody", "completoBody")
    }
})



// --------------------------------------- Matematica --------------------------------------- //
// ---- Calculadora ---- //
let calculadora = document.getElementById("calculadora")
calculadora.addEventListener('submit', (event) =>{
    event.preventDefault()
    let calculadoraValor1 = parseFloat(document.getElementById('calculadoraValor1').value)
    let operador = document.getElementById('selector').value
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
        case "*":
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
    element.addEventListener('change', () =>{
        if(element.value == respuestasMate[index]){
            correcto(element)
            toast ()
        } else{
            incorrecto(element)
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
    historiaPersonalTexto.innerText = `Hola. Mi nombre es ${sustantivo1} (sustantivo). Soy una persona ${adjetivo1} (adjetivo). Me gusta mucho ${verbo1} (verbo).`
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

let respuestasArgentina = ["cajasArgentina colorCeleste", "cajasArgentina colorCeleste", "cajasArgentina colorCeleste", "cajasArgentina colorBlanco", "cajasArgentina colorBlanco", "cajasArgentina colorBlanco", "cajasArgentina colorCeleste", "cajasArgentina colorCeleste", "cajasArgentina colorCeleste"]
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
// --- Boton Fianl --- //
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

