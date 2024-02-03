let nuevoUsuario = JSON.parse(localStorage.getItem("usuarioLocal"))
document.querySelector(".nav-user-text").innerText = `${nuevoUsuario.nombre}`
document.querySelector("#header-avatar").src =`../imagenes/avatar-${nuevoUsuario.genero}-cambiado-chico100px.png`
document.querySelector(".header-btn-logout").addEventListener("click", ()=>{
    localStorage.clear()
    window.location.href = "registrar.html"
})

let resumenCompra = document.getElementById('tablaResumen')
let tablaTotal = document.getElementById("tablaFooter")
let arrayCompra = JSON.parse(localStorage.getItem('carrito')) ?? []
let indice
class libros{
    constructor(id, nombre, autor, precio, stock){
        this.id = id
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
        this.unidades = 1
        this.stock = stock;
    }
}
const libro1 = new libros (1, "Matemática", "Fernández", 5000, 9)
const libro2 = new libros (2, "Lengua", "Martínez", 4000, 6)
const libro3 = new libros (3, "Historia", "Pérez", 3000, 2)
const libro4 = new libros (4, "Geografía", "Sánchez", 4500, 3)
let arrayOferta = [libro1, libro2, libro3, libro4]

if(localStorage.getItem("carrito")){
    mostrarResumen()
}
// Funcion para Mostrar toda la oferta
const mostrarOFerta = () =>{
    let contendedorOferta = document.getElementById('contendedorOferta')
    contendedorOferta.innerHTML = ""
    arrayOferta.forEach((element) => {
        contendedorOferta.innerHTML += `
        <div class="card-productos" id=${element.id}>
        <img class="card-productos-img"src="../imagenes/${element.id}.jpg" alt="">
        <h3 class="card-productos-titulo">${element.nombre}</h3>
        <p class="card-productos-stock">Stock: ${element.stock}</p>
        <p class="card-productos-precio">$${element.precio}</p>
        <button class="card-productos-boton" id="botonProducto${element.id}">Comprar</button>
        <div class="ribbon-content"><span class="ribbon">Oferta -30%</span></div>
        </div>
        `
    })
}

mostrarOFerta()
// Agregando productos al carrito, controlando el stock y subiendolos al localstorage
let productosDom = document.querySelectorAll(".card-productos-boton")
productosDom.forEach((element) => {
    element.addEventListener('click', (e) =>{
        e.preventDefault()
        let productoIdElegido = e.target.parentElement.getAttribute("id")
        let productoElegido = arrayOferta.find((el) => el.id == productoIdElegido)
        indice = arrayCompra.findIndex(producto => producto.id == productoIdElegido)
        if(arrayCompra.some((el) => el.id == productoIdElegido) != true){
            arrayCompra.push(productoElegido)
            localStorage.setItem("carrito", JSON.stringify(arrayCompra))
            mostrarResumen()
            indice = arrayCompra.findIndex(producto => producto.id == productoIdElegido)
            arrayCompra[indice].stock--
        }else if(arrayCompra[indice].stock > 0){
            arrayCompra[indice].unidades++
            arrayCompra[indice].stock--
            localStorage.setItem("carrito", JSON.stringify(arrayCompra))
            mostrarResumen()
        }else{
            Swal.fire('No puedes comprar más que el stock')
        }
    })
})
// Imprimiendo los valores del carrito en el html
function mostrarResumen(){
    //Cambio estetico de css de opacity para la tabla de la compra
    document.getElementById("resumenCompra").style.opacity = "100%"
    resumenCompra.innerHTML = ""
    let subTotal
    let total = 0
    let traerStorage = JSON.parse(localStorage.getItem("carrito"))
    traerStorage.forEach((element) =>{
        subTotal = parseFloat(element.precio) * parseFloat(element.unidades)
        resumenCompra.innerHTML += `
        <tr>
                <td>${element.nombre}</td>
                <td>$${element.precio}</td>
                <td>${element.unidades}</td>
                <td>$${subTotal}</td>
            </tr>
        `
        total += subTotal
    })
    tablaTotal.innerHTML =  `<tr><td colspan="5">Total: $${total}</td></tr>`
}
// Botones para limpiar el carrito
let botonesCompra = document.querySelectorAll(".botonesCompra")
botonesCompra.forEach((element) =>{
    element.addEventListener('click', () =>{
        localStorage.removeItem('carrito')
        location.reload()
    })
})