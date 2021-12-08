// Ejercicios con variables y operadores:


//------------------------------------------------------------------------------

// 0) Solicitar al usuario su nombre y mostrarlo por alert. Luego Mostrar un alert que salude diciendo Hola y el nombre de la persona. Luego solicitar el apellido y que salude por alert con el nombre completo (Ej: Hola Florencia Andres)

// let nombre;

// nombre = prompt("¿Cuál es tu nombre?");

// alert("Hola " + nombre);

// let apellido;

// apellido = prompt ("¿Cuál es tu apellido ");

// alert ("Hola " +nombre + " " + apellido);

//------------------------------------------------------------------------------

// 1) Solicitar al usuario dos números y mostrar por alert el resultado de la suma de ambos.

// let primerNumero = prompt("Ingrese un número");

// let segundoNumero = prompt("Ingrese otro número");

// let resultado;

// resultado = parseInt(primerNumero) + parseInt(segundoNumero);

// alert("La suma de los dos números es igual a " + resultado);

//-------------------------------------------------------------------------------------

// 2) Solicitar al usuario la edad que cumple o cumplió este año y calcular en qué año nació y mostrar un mensaje por alert (Ej: Usted nació en 1974)

// let edad = prompt("Ingrese su edad");

// let año = 2021;

// let resultado = año - parseInt(edad);

// alert("Usted nació en " + resultado);

//-------------------------------------------------------------------------------------

// 3) Mostrar al usuario su balance de cuenta (inventar un número de cuenta). Consultar cuánto dinero desea retirar y mostrar el nuevo balance.

// let nroCuenta = 10000;

// let retiro = prompt ("Usted dispone de " + nroCuenta + " ¿Cuánto quisiera retirar?");

// let resultado = nroCuenta - parseInt(retiro);

// alert("Su nuevo saldo es de " + resultado);

//-----------------------------------------------------------------------------------------

// 4) Solicitar al usuario 3 notas, calcular el promedio y mostrarlo por alert.

// let num1, num2, num3, promedio;

// num1 = parseFloat (prompt("Ingrese su primer nota"));

// num2 = parseFloat (prompt("Ingrese su segunda nota"));

// num3 = parseFloat (prompt("Ingrese su tercer nota"));

// promedio = (num1+num2+num3)/3;

// alert("Tu promedio es: " + promedio);

//-----------------------------------------------------------------------------------------

// 5) Crear un conversor de medidas. Pedirle al usuario que ingrese una medida en metros y pasarlo a pies, centímetros y pulgadas. 
// mostrar por alert los tres resultados.

// 1mt = 39.37 pulgadas
// 1mt = 3.28 pies
// 1mt = 100cm

// function metroAImperial(){
//     let numero = prompt("ingresa numero a convertir")
//     let pie = numero * 1 * 3.281
//     let cent = numero * 1 * 100
//     let pulgada = numero * 1 * 39.37
//     alert("pie = " + pie + " , en centimetros = " + cent + " , en pulgada = " + pulgada)
// }
// metroAImperial();

//-----------------------------------------------------------------------------------------

// 6) Solicitar al usuario dos números y mostrar el resultado de la suma. 
//Luego solicitar al usuario un tercer número y multiplicarlo por el resultado anterior. Mostrar el resultado final.

// let primerNumero = prompt("Ingrese un número");

// let segundoNumero = prompt("Ingrese otro número");

// let resultado;

// resultado = parseInt(primerNumero) + parseInt(segundoNumero);

// alert("La suma de los dos números es igual a " + resultado);

// let tercerNumero = parseFloat(prompt("Ingrese un tercer número para multiplicar"));


// alert("El resultado de la multiplicación es " + tercerNumero * resultado);

//-----------------------------------------------------------------------------------------

// 7) Armar un conversor de minutos a segundos. Solicitar al usuario un número de minutos y mostrar por alert la cantidad de segundos a la que equivale.

// let segundos = parseInt (prompt("Ingrese los minutos"));

// alert("El equivalente en segundos es: " + segundos*60);

//-----------------------------------------------------------------------------------------

// 8) Solicitar al usuario la medida de la base y de la altura de un rectángulo y devolver el área.

// let base = parseInt(prompt("Ingrese medida de la base del rectángulo:"));

// let altura = parseInt(prompt("Ingrese medida de la altura del rectángulo:"));

// alert("El área del rectángulo es: " + (base*altura));

//-----------------------------------------------------------------------------------------

// 9) Solicitar al usuario la medida de la base y de la altura de un triángulo equilátero y devolver el área.

// let base = parseFloat(prompt("Ingrese la base del triángulo "));

// let altura = parseFloat(prompt("Ingrese la altura del triángulo"));

// alert("El área del triángulo es " + (base*altura)/2);

//-----------------------------------------------------------------------------------------

// 10) Solicitar al usuario un monto y un número de descuento. Mostrar al usuario cuánto es el precio final con el descuento aplicado.

// let monto = parseFloat(prompt("Ingrese un monto:"));

// let descuento = parseFloat(prompt("Ingrese un descuento:"));

// alert("El precio final con descuento es de: " + (monto*descuento)/100);

//-----------------------------------------------------------------------------------------

// 11) Solicitar al usuario su nombre y la edad que cumple o cumplió en 2021, y mostrar un mensaje con alert diciendo
// "Hola (nombre) usted nació en el año (año)"

// let nombre = prompt("¿Cuál es tu nombre?");

// let edad = prompt("Ingrese su edad");

// let año = 2021;

// let resultado = año - parseInt(edad);

// alert("Hola " + nombre + " Usted nació en " + resultado);

//-----------------------------------------------------------------------------------------

// 12) Crear un conversor de Celsius a Farenheit. Solicitar al usuario su nombre y una temperatura
// y mostrar por alert su equivalente en Farenheit junto con un mensaje que incluya ambos datos. 
// ºF = (ºC · 1,8) + 32

// let nombre = prompt("¿Cuál es tu nombre?");

// let temperatura = parseFloat(prompt("Ingrese una temperatura en Celsius"));

// alert ("Hola " + nombre + " su temperatura en Farenheit es: " + ((temperatura*1.8)+32));

//-----------------------------------------------------------------------------------------

// 13) Realizar el mismo ejercicio que el anterior pero al revés, de Farenheit a Celsius.
// ºC = (ºF -32) / 1,8

// let nombre = prompt("¿Cuál es tu nombre?");

// let temperatura = parseFloat(prompt("Ingrese una temperatura en Farenheit"));

// alert ("Hola " + nombre + " su temperatura en Celsius es: " + ((temperatura-32)/1.8));

//-----------------------------------------------------------------------------------------

// 14) Solicitar al usuario un número y almacenarlo en una variable. Sumarle 5 , multiplicar el resultado por 10
// y sacar el resto de su división por 3. Mostrar el resultado sin comas.

// let numero = ((parseFloat(prompt("Ingrese un número")))+5)*10;

// alert("El resultado es: " + (numero%3));

// -------------------------------------------------------------- BONUS -------------------------------------------------------------------------

//0) Solicitar dos números y mostrar la suma de sus cifras. (Ejemplo: 15 y 29, mostrar 1529).

// let primerNumero = prompt("Ingrese el primer número");

// let segundoNumero = prompt("Ingrese el segundo número");

// alert("La suma de sus cifras es: " + primerNumero + segundoNumero);

//-----------------------------------------------------------------------------------------

//1) Crear un conversor de años a segundos. Solicitar al usuario una cantidad de días y 
//mostrar su equivalente en segundos por alert o alert, a elección. (Pueden probar también con números con coma :) 
//2,5 años por ejemplo)

// let año = parseFloat(prompt("Ingrese cantidad de años"));

// let dias = año * 365;

// let horas = dias * 24;

// let minutos = horas * 60;

// let segundos = minutos * 60;

// alert ("El equivalente en segundos es " + segundos);

//-----------------------------------------------------------------------------------------

// 2) Solicitar al usuario que ingrese la cantidad de kilómetros que desea recorrer con su motocicleta. 
// A continuación solicitar la velocidad promedio a la que desea ir en kilómetros por hora. 
// Calcular el tiempo estimado en llegar a destino en minutos.  A tener en cuenta: 
// la velocidad se calcula en metros sobre segundos!)

let kilometros = parseFloat(prompt("Ingrese la cantidad de km a recorrer"));

let velocidadPromedio = parseFloat(prompt("Ingrese la velocidad promedio a lauqe desea ir"));








