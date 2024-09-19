function helloWorld() {
    console.log('Hola Mundo - Grupo 52');
    var multiplica = 25 * 96;
    console.log('25 * 96 = ' + multiplica);

    /* Suma */
    var valor1 = 10;
    var valor2 = 20;
    var operacionSuma = valor1 + valor2;
    var operacionResta = valor1 - valor2;
    var operacoinMultplicacion = valor1 * valor2;
    var operacionDivision = 0;
if(valor2 != 0){
operacionDivision = valor1 / valor2;
}else{
console.log('No se puede dividir entre 0');
}

    console.log('La Suma es igual a: ' + operacionSuma);
    console.log('La resta es igual a: ' + operacionResta);
    console.log('La Multiplicación es igual a: ' + operacoinMultplicacion);
    if(valor2 != 0){
        console.log('La División es igual a: ' + operacionDivision);
    }


}