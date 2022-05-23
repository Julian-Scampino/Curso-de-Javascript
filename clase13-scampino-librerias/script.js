// ---- Matematica ---- //
let resultado1 = document.getElementById('resultado1');
resultado1.addEventListener('change', () =>{
    let resultado1Valor1 = resultado1.value;
    if (resultado1Valor1 == 9){
        correcto(resultado1)
        toast ()
    } else{
        resultado1.classList.remove("bien")
    }
})
let resultado2 = document.getElementById('resultado2');
resultado2.addEventListener('change', () =>{
    let resultado1Valor2 = resultado2.value;
    if (resultado1Valor2 == 5){
        correcto(resultado2)
        toast ()
    } else{
        resultado2.classList.remove("bien")
    }
})
// ----- Lengua ----- //
// --- Practica --- // 
let historiaPersonal = document.getElementById('historiaPersonal')
console.log(historiaPersonal)


historiaPersonal.addEventListener('submit', (event) => {
    event.preventDefault()
    let sustantivo1 = document.getElementById('sustantivo').value
    let adjetivo1 = document.getElementById('adjetivo').value
    let verbo1 = document.getElementById('verbo').value
    let historiaPersonalTexto = document.getElementById('historiaPersonalTexto')
    historiaPersonalTexto.innerText = `Hola. Mi nombre es ${sustantivo1} (sustantivo). Soy una persona ${adjetivo1} (adjetivo). Me gusta mucho ${verbo1} (verbo).`
    historiaPersonal.reset()
})
// --- Preguntas sustantivos, verbo, adjetivos --- // 
let lenguaRespuesta1 = document.getElementById('lenguaRespuesta1')
let lenguaRespuestaValor1
lenguaRespuesta1.addEventListener('change', () =>{
    lenguaRespuestaValor1 = lenguaRespuesta1.value
    if (lenguaRespuestaValor1 == "verbo"){
        correcto(lenguaRespuesta1)
        toast () 
    } else{
        lenguaRespuesta1.classList.remove("bien")
    }
})
let lenguaRespuesta2 = document.getElementById('lenguaRespuesta2')
let lenguaRespuestaValor2
lenguaRespuesta2.addEventListener('change', () =>{
    lenguaRespuestaValor2 = lenguaRespuesta2.value
    if (lenguaRespuestaValor2 == "verbo"){
        correcto(lenguaRespuesta2)
        toast () 
    } else{
        lenguaRespuesta2.classList.remove("bien")
    }
})
let lenguaRespuesta3 = document.getElementById('lenguaRespuesta3')
let lenguaRespuestaValor3
lenguaRespuesta3.addEventListener('change', () =>{
    lenguaRespuestaValor3 = lenguaRespuesta3.value
    if (lenguaRespuestaValor3 == "sustantivo"){
       correcto (lenguaRespuesta3)
       toast ()
    } else{
        lenguaRespuesta3.classList.remove("bien")
    }
})
let lenguaRespuesta4 = document.getElementById('lenguaRespuesta4')
let lenguaRespuestaValor4
lenguaRespuesta4.addEventListener('change', () =>{
    lenguaRespuestaValor4 = lenguaRespuesta4.value
    if (lenguaRespuestaValor4 == "adjetivo"){
       correcto (lenguaRespuesta4)
       toast ()
    } else{
        lenguaRespuesta4.classList.remove("bien")
    }
})
let lenguaRespuesta5 = document.getElementById('lenguaRespuesta5')
let lenguaRespuestaValor5
lenguaRespuesta5.addEventListener('change', () =>{
    lenguaRespuestaValor5 = lenguaRespuesta5.value
    if (lenguaRespuestaValor5 == "sustantivo"){
       correcto (lenguaRespuesta5)
       toast ()
    } else{
        lenguaRespuesta5.classList.remove("bien")
    }
})
// -- Funcion correcto --- //
function correcto (etiqueta){
    etiqueta.className = "bien"
    etiqueta.setAttribute('readonly', '')
}
// -- SweetAlert2 -- //
Swal.fire({
    icon: 'info',
    title: 'Bienvenido/da',
    text: `Al hacer "click" tienes 30 segundos para constestar`,
    confirmButtonText: "OK",
})
.then(resultado => {
    if (resultado.value) {
        setTimeout(()=> {
            let consulta = Array.from(document.getElementsByClassName("bien"))
            Swal.fire({
                icon: 'info',
                title: 'Resultado',
                text: `Acertaste ${consulta.length} de 7`,
            })
            let bloqueoTodos = Array.from(document.getElementsByTagName("input"))
            bloqueoTodos.forEach(element => {
                element.setAttribute('readonly', '')
            })
        }, 30000)
    }
})
// -- Toastify -- //
function toast (){
    Toastify({
        text: "Correcto",
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
      }).showToast(); 
}
