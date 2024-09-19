def helloWorld():
    print("Hola mundo - Grupo 52")
    multiplica = 25 * 96
    print("25 * 96 = " + str(multiplica))
    
    # Suma
    valor1 = 10
    valor2 = 0
    operacionSuma = valor1 + valor2
    operacionResta = valor1 - valor2
    operacionMultiplicacion = valor1 * valor2
    operacionDivision = 0
    if valor2 != 0:
        operacionDivision = valor1 / valor2
    else: print('No se puede dividir entre 0')

    print(f'La suma es igual a: {operacionSuma}')
    print(f'La resta es igual a: {operacionResta}')
    print(f'La multiplicacion es igual a:{operacionMultiplicacion}')
    if valor2 != 0:
        print(f'La División es igual a: {operacionDivision}')


helloWorld()