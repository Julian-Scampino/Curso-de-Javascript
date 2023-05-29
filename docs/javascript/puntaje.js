let ArrayPersonas = []

fetch("../json/personas.json")
.then(response => response.json())
.then(personas => {
    ArrayPersonas = personas
    if(localStorage.getItem("usuarioLocal") != null){
        let traerNuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"))
        ArrayPersonas.push(traerNuevoUsuario)
    }
})

setTimeout(() =>{
    ArrayPersonas.sort((a,b) =>{
        if(a.correctas > b.correctas){
            return -1;
        }
        if(a.correctas > b.correctas){
            return 1;
        }
        return 0;
    });
    let tablaBodyParticipantes = document.getElementById('tablaBodyParticipantes')
    tablaBodyParticipantes.innerHTML = ""
    ArrayPersonas.forEach((persona) => {
        let {nombre, apellido, correctas} = persona
        tablaBodyParticipantes.innerHTML += `
            <tr>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${correctas}</td>
             </tr>
        `
    })
}, 500)