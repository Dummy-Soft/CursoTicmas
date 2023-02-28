

document.getElementById('suma').addEventListener('click', function(){

    let numeroA = document.getElementById('numero1').value;
    console.log('a es: '+numeroA);
    let numeroB = document.getElementById('numero2').value;
    console.log('b es: '+numeroB);
    let resultado = sumar(parseInt(numeroA), parseInt(numeroB))
    console.log('res es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contresultado').style.display = 'block';

});

function sumar(a,b){
    return a + b;
}