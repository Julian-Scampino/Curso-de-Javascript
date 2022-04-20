

// Usando FUNCIONES para calcular el promedio de notas.

alert("Esta es una funcion para calcular promedios hasta 6 valores, si alguno no lo necesita escriba 0");

function valor(){
    let entrada = parseFloat(prompt("Escriba su nota"))
    while(isNaN(entrada) || entrada === " "){
        alert("no es un numero")
        entrada = parseFloat(prompt("Escriba una nota"))
    }
    return entrada
}
let num1= valor();
let num2= valor();
let num3= valor();
let num4= valor();
let num5= valor();
let num6= valor();


function promedio(nota1, nota2, nota3, nota4, nota5, nota6){
    return ((nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6);
}
let resultado = promedio(num1, num2, num3, num4, num5, num6);
alert("Su premedio es "  + resultado);

