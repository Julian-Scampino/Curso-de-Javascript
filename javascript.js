
// Usando el Ciclo FOR

alert("Somos un restaurante. Hay 20 sillas en total, reserve en grupos de a 4.");
for (let i = 20; i >= 4; i=i-4) {
    alert("Quedan " + i + " sillas");
}
alert("Ya no hay lugar, estamos llenos. Venga otro día.")





// Usando el Ciclo WHILE

let repeticion = true;

while(repeticion) {
    let auto = prompt("Diga el auto que quiere comprar"); 
    let color = prompt("Diga de qué color quiere el auto");
    let precio = parseFloat(prompt("Diga el precio"));
    let cuotas = parseInt(prompt("Diga las cuotas"));
    let division = precio / cuotas;
    if(isNaN(precio) || isNaN(cuotas) || precio==0 || cuotas==0){
        alert("No es valido")
    } else if (cuotas <= 3){
        alert("El valor de la cuota es de " + division + " sin recargo")
        let resultado1 = alert("Usted quiere un auto " + auto + " de color " + color + " en " + cuotas + " cuotas de " + division + " pesos");
    } else{
        alert("El valor de la cuota es de " + (division * 1.10) + " con recargo del 10% incluido")
        let resultado2 = alert("Usted quiere un auto " + auto + " de color " + color + " en " + cuotas + " cuotas de " + (division * 1.10) + " pesos");
    }
    repeticion = window.confirm("¿Quiere comprar otro auto?");
}
alert("Listo. Gracias por su compra")
