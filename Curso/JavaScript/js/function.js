//console.log("Hola Mundo!")
//let numero1 = 3;
//let numero2 = 4;
//let resultado = numero1+numero2;
//console.log("La Suma de los numeros es: "+resultado);

/** 
document.getElementById("boton").onclick = function() {
    console.log("Leemos el clik al boton");
    document.getElementById("demo").innerHTML = "Primer Evento en JavaScript (Click en boton directo)";
}
*/

/**
document.addEventListener('click', function(){
    console.log("eventlistener ON")
    document.getElementById("demo").innerHTML = "Segundo Evento en JavaScript (Click en cualquier parte)";
})
 */

document.getElementById("boton").addEventListener('click', function(){
    console.log("eventlistener ON")
    document.getElementById("demo").innerHTML = "Tercer Evento en JavaScript (Click en boton eventlistener)";
})  

document.getElementById("boton_color").addEventListener('click', function(){
    document.body.style.backgroundColor = '#FF0000'
})

document.getElementById("boton_default").addEventListener('click', function(){
    document.body.style.backgroundColor = 'blue'
    document.getElementById("demo").innerHTML = "Cambio de Contenido en HTML con JavaScript";
    document.getElementById('demo').style.display ='';
    console.log("Todo como estaba")
})

document.getElementById("boton_ocultar").addEventListener('click', function(){
    document.getElementById('demo').style.display = 'none';
})

const collection = document.getElementsByClassName('parrafo');
for (let i = 0; collection.length; i++) {
    collection[i].style.backgroundColor = "green";
    collection[i].style.color = "white";
}

