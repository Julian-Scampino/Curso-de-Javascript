//----------------------------- Memoria
let Auto = document.getElementById('auto')
let Elefante = document.getElementById('elefante')
let Nuve = document.getElementById('nuve')
let Arbol = document.getElementById('arbol')
let Trofeo = document.getElementById('trofeo')
let Pelota = document.getElementById('pelota')


let textoClick = document.getElementById('textoClick')
let arrayMemoria= ["auto", "elefante", "nuve", "arbol", "trofeo", "pelota", "TERMINADO"]
let probandoArray
let imagenesClick = Array.from(document.getElementsByClassName("imagenesClick"))
imagenesClick.forEach((element) =>{
    element.addEventListener('click', () =>{
        if(textoClick.textContent == element.id){
            element.classList.add("imagenBien", "mostrarImagenesOnClick")  
            let siBien = arrayMemoria.indexOf(element.id)
            arrayMemoria.splice(siBien, 1)
            probandoArray = arrayMemoria[0]
            textoClick.innerText = probandoArray
            toast ()
        }else{
            element.classList.add("imagenMal", "mostrarImagenesOnClick")
            let siMal = arrayMemoria.indexOf(element.id)
            arrayMemoria.splice(siMal, 1)
            probandoArray = arrayMemoria[0]
        }
    })
})


//--------------------animaciones
let botonAnimacion = document.getElementById('botonAnimacion')
let contenedorDeImagenes = document.getElementById("contenedorDeImagenes")
botonAnimacion.addEventListener('click', () =>{
    textoClick.innerText = ""
    if(contenedorDeImagenes.className != "bloquearClickContenedorMemoria"){
        contenedorDeImagenes.classList.add("bloquearClickContenedorMemoria")
    }
    setTimeout(() => {
        Auto.classList.toggle("mostrarMemoria")    
    }, 1000);
    setTimeout(() => {
        Auto.classList.toggle("mostrarMemoria")
        Nuve.classList.toggle("mostrarMemoria")    
    }, 2000);
    setTimeout(() => {
        Nuve.classList.toggle("mostrarMemoria")  
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
        textoClick.innerText = "auto"
    }, 7000)
})
    
    