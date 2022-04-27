// Calculadora para promediar valores, sin limite de intentos.
const promedio = []
let entrada;
let confirmar;
do{
    entrada = parseFloat(prompt("Escriba un numero"));
    while (isNaN(entrada) || entrada === " "){
        alert("no es un numero")
        entrada = parseFloat(prompt("Escriba un numero"))
    }
    promedio.push(entrada)
    confirmar = confirm("Quiere seguir?");   
}while(confirmar == true);

let suma = 0;

for (let i = 0; i < promedio.length; i++) {
    suma += promedio[i];
}

let cantidadElementos = parseInt(promedio.length)

alert("Valores ingresados: " + promedio.join(", ") + "\n" + " Promedio = " + (suma / cantidadElementos))
