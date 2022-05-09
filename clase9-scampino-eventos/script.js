// Un simulador de una tienda virtual de guitarras, y una simulador para consultar productos segun un precio máximo y mostrar lo por DOM.
// Trabajo hecho en base a la "primer entrega del proyecto final"
class Guitarra {
    constructor (marca, modelo, cantidadDeCuerdas, color, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.cantidadDeCuerdas = cantidadDeCuerdas;
        this.color = color;
        this.precio = precio;
    }
}
const guitarra1 = new Guitarra ("Gibson", "Les Paul", 6, "negro", 100000)
const guitarra2 = new Guitarra ("Gibson", "Sg", 6, "rojo", 85000)
const guitarra3 = new Guitarra ("Gibson", "Flying V", 6, "naranja", 75000)
const guitarra4 = new Guitarra ("Fender", "Stratocaster", 6, "blanco", 95000)
const guitarra5 = new Guitarra ("Fender", "Telecaster", 6, "amarillo", 80000)
const guitarra6 = new Guitarra ("Jackson", "Rtx123", 7, "negro", 50000)
const guitarra7 = new Guitarra ("Jackson", "Ve", 6, "azul", 60000)
const guitarra8 = new Guitarra ("Ibanez", "Jem", 6, "blanco", 78500)
const guitarra9 = new Guitarra ("Ibanez", "Js", 7, "violeta", 60000)
const guitarra10 = new Guitarra ("Ibanez", "Gio", 6, "azul", 45000)
// Aqui abajo : el array
let guiatarrasEnArray = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8, guitarra9, guitarra10]

// Abajo: mostrando todos los productos y mostrando por el DOM.
function mostrarTodo(){
    let cards = document.getElementById("contenedor-todo")
    
    guiatarrasEnArray.forEach((mostrarTodoEnDom) => {
        cards.innerHTML += `
            <div class="cards-todo">
                <h3> Modelo : ${mostrarTodoEnDom.modelo} </h3>
                <p> Marca : ${mostrarTodoEnDom.marca}</p>
                <p> Cuerdas : ${mostrarTodoEnDom.cantidadDeCuerdas}</p>
                <p> Color : ${mostrarTodoEnDom.color}</p>
                <p> Precio : $ ${mostrarTodoEnDom.precio}</p>
            </div>
            `
    })
}
//------------------------------------------------------------------------------------------------------
//Aqui abajo : una simulador para consultar productos segun un precio máximo y mostrarlo por DOM.
let input1 = document.getElementById("inputText1");
input1.addEventListener('change', () =>{
    let inputValor1 = input1.value
    console.log(inputValor1)
    let precioConsultado1 = guiatarrasEnArray.filter(unPrecio => unPrecio.precio <= inputValor1)
    console.log(precioConsultado1)
    let cardsFiltro = document.getElementById("contendor-filtrados")
    precioConsultado1.forEach((plasmandoFiltradoAlDocumento) => {
        cardsFiltro.innerHTML += `
        <div class="cards-filtrados">
            <h3> Modelo : ${plasmandoFiltradoAlDocumento.modelo} </h3>
            <p> Marca : ${plasmandoFiltradoAlDocumento.marca}</p>
            <p> Cuerdas : ${plasmandoFiltradoAlDocumento.cantidadDeCuerdas}</p>
            <p> Color : ${plasmandoFiltradoAlDocumento.color}</p>
            <p> Precio : $ ${plasmandoFiltradoAlDocumento.precio}</p>
        </div>
        `
    })
})
let reset = document.getElementById("reset")
reset.addEventListener('click', () =>{
    location.reload()
    
}
)

mostrarTodo()


