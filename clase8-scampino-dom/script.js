// Un simulador de una tienda virtual de guitarras, y una simulador para consultar productos segun un rango de precios y mostrar por DOM.
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
//Aqui abajo : una simulador para consultar productos segun un rango de precios y mostrarlos en DOM.
function mostrarFiltro(){
    let confirmar = true
    let precioConsultado1;
    do{
        alert("Busque guitarras en un rango de precios")
        let precioMinimo = parseFloat(prompt("Diga el precio mínimo"));
        while(isNaN(precioMinimo) || precioMinimo === " "){
            alert("Error. Escriba un numero");
            precioMinimo = parseFloat(prompt("Diga el precio mínimo"));
        }
        let precioMaximo = parseFloat(prompt("Diga el precio máximo"));
        while(isNaN(precioMaximo) || precioMaximo === " "){
            alert("Error. Escriba un numero");
            precioMaximo = parseFloat(prompt("Diga el precio máximo"));
        }
        alert(`Usted desea buscar guitarras con precio entre $${precioMinimo} y $${precioMaximo}`)
        
        precioConsultado1 = guiatarrasEnArray.filter(unPrecio => unPrecio.precio >= precioMinimo && unPrecio.precio <= precioMaximo)
        console.log(precioConsultado1)
        
        if(precioConsultado1.length == 0){
            alert("no hay productos con esos precios")
        } else{
            precioConsultado1.forEach((mostrar) => {
                alert("Las guitarras que tenemos en ese rango de precios son : \n" + (JSON.stringify(mostrar)));
                console.log(mostrar);
            })
        } 
        confirmar = confirm("¿Quiere buscar otra vez")
    } while(confirmar)
    alert("Gracias, vuelva cuando quiera")
    
    // Manipulando el DOM para los filtrados.
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
}
// Aca llamando a las 2 funciones
mostrarTodo()
mostrarFiltro()