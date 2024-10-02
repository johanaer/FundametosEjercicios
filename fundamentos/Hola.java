public class Hola {
    public static void main(String[] args) {
        System.out.println("Hola Mundo - Grupo 52");
        int valor1 = 10;
        int valor2 = 20;
        int operacionSuma = valor1 + valor2;
        int operacionResta = valor1 - valor2;
        int operacionMultiplicacion = valor1 * valor2;
        int OperacionDivision = 0;

        if(valor2 != 0){
            OperacionDivision = valor1 / valor2;
        }else{
            System.out.println("No se puede dividir entre 0 :( ");

        }
        
        System.out.println("La Suma es igual a: " + operacionSuma);
        System.out.println("La Resta es igual a: " + operacionResta);
        System.out.println("La Multimplicación es igual a: " + operacionMultiplicacion);
        if(valor2 != 0){
            System.out.println("La División es igual a: " + OperacionDivision);
        }
    }
}