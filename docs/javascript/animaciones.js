//----------------------------- Memoria
let Auto = document.getElementById('auto')
let Elefante = document.getElementById('elefante')
let Nube = document.getElementById('nube')
let Arbol = document.getElementById('arbol')
let Trofeo = document.getElementById('trofeo')
let Pelota = document.getElementById('pelota')


let textoClick = document.getElementById('textoClick')
let arrayMemoria= ["auto", "elefante", "nube", "arbol", "trofeo", "pelota", "TERMINADO"]
let probandoArray
let imagenesClick = Array.from(document.getElementsByClassName("imagenesClick"))
imagenesClick.forEach((element) =>{
    element.addEventListener('click', () =>{
        if(textoClick.textContent == element.id){
            element.classList.add("imagenBien", "mostrarImagenesOnClick")
            element.parentElement.style.border = '5px solid #00ff09'
            let siBien = arrayMemoria.indexOf(element.id)
            arrayMemoria.splice(siBien, 1)
            probandoArray = arrayMemoria[0]
            textoClick.innerText = probandoArray
            toast ()
            //Ocultando el elemento de hermano mayor P que contiene el signo de pregunta ?
            element.previousElementSibling.style.display="none"
        }else{
            element.classList.add("imagenMal", "mostrarImagenesOnClick")
            element.parentElement.style.border = '5px solid red'
            let siMal = arrayMemoria.indexOf(element.id)
            arrayMemoria.splice(siMal, 1)
            probandoArray = arrayMemoria[0]
            //Ocultando el elemento de hermano mayor P que contiene el signo de pregunta ?
            element.previousElementSibling.style.display="none"
        }
        if(arrayMemoria?.length == 1){
            botonAnimacion.style.visibility= "hidden";
            document.querySelector('#texto-explicativo-juego-memoria').style.visibility= "hidden";
        }
    })
})


//--------------------animaciones
let botonAnimacion = document.getElementById('botonAnimacion')
let contenedorDeImagenes = document.getElementById("contenedorDeImagenes")
botonAnimacion.addEventListener('click', () =>{
    botonAnimacion.style.display = "none"
    let contenedorMioLoader = document.getElementById("contenedorMioLoader");
    contenedorMioLoader.className ="contenedorMioLoaderAparecer"
    textoClick.innerText = ""
    if(contenedorDeImagenes.className != "bloquearClickContenedorMemoria"){
        contenedorDeImagenes.classList.add("bloquearClickContenedorMemoria")
    }
    setTimeout(() => {
        Auto.classList.toggle("mostrarMemoria")    
    }, 1000);
    setTimeout(() => {
        Auto.classList.toggle("mostrarMemoria")
        Nube.classList.toggle("mostrarMemoria")    
    }, 2000);
    setTimeout(() => {
        Nube.classList.toggle("mostrarMemoria")  
        Trofeo.classList.toggle("mostrarMemoria")  
    }, 3000);
    setTimeout(() => {
        Trofeo.classList.toggle("mostrarMemoria")
        Pelota.classList.toggle("mostrarMemoria")    
    }, 4000);
    setTimeout(() => {
        Pelota.classList.toggle("mostrarMemoria")
        Elefante.classList.toggle("mostrarMemoria")    
    }, 5000);
    setTimeout(() => {
        Elefante.classList.toggle("mostrarMemoria")
        Arbol.classList.toggle("mostrarMemoria")    
    }, 6000)
    setTimeout(() => {
        Arbol.classList.remove("mostrarMemoria")
        if(contenedorDeImagenes.className == "bloquearClickContenedorMemoria"){
            contenedorDeImagenes.classList.remove("bloquearClickContenedorMemoria")
        }
        textoClick.innerText = arrayMemoria[0]
        botonAnimacion.style.display = ""
        contenedorMioLoader.className ="contenedorMioLoaderEscondido"
        
    }, 7000)
})
    
    