Swal.fire("Hola soy Julián Scampino. Este es mi trabajo del curso de Javascript de Coder House. Está hecho con html, scss, Javascript");
if (localStorage.getItem("usuarioLocal")) {
    window.location.href = "../index.html";
} else {
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
    element1.addEventListener("click" , (element1)=>{
        element1.target.parentElement.parentElement.parentElement.children[1].checked = true
        contenedorAvatares.forEach((element2, index2)=>{
            element2.style.opacity = "50%"
        })
        element1.target.style.opacity = "100%"
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
    })
})