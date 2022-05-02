// Un simulador de una tienda virtual de guitarras, y una simulador para consultar productos segun un rango de precios.
class Guitarra {
    constructor (marca, modelo, cantidadDeCuerdas, color, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.cucantidadDeCuerdaserdas = cantidadDeCuerdas;
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

let guiatarrasEnArray = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5, guitarra6, guitarra7, guitarra8, guitarra9, guitarra10]

//Aqui abajo : un simulador para consultar productos segun un rango de precios.

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
alert(`Usted desea buscar guitarras con el precio entre $${precioMinimo} y $${precioMaximo}`)
// Guardo en un array los objetos filtrados anteriormente por el precio
const precioConsultado1 = guiatarrasEnArray.filter(unPrecio => unPrecio.precio >= precioMinimo && unPrecio.precio <= precioMaximo)

precioConsultado1.forEach((mostrar) => {
    alert("Las guitarras que tenemos en ese rango de precios son : \n" + (JSON.stringify(mostrar)));
})


