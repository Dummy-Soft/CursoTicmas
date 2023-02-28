//console.log("Hola Mundo!")
//let numero1 = 3;
//let numero2 = 4;
//let resultado = numero1+numero2;
//console.log("La Suma de los numeros es: "+resultado);

document.getElementById("boton").onclick = function() {
    console.log("Leemos el clik al boton");
    document.getElementById("demo").innerHTML = "Primer Evento en JavaScript";
}