/*Practica 2

/*function greet() {
    console.log(`Hello`);

}
*/

//let greet = () => console.log(`Hola`);
//refactor de greet versión ES6, usando una arrow function.

/*
function logGreeting(fn) {
    fn();
}
logGreeting(greet);`
*/ //Versión inicial de logGreeting, sin las ventajas de ES6.

//let logGreeting = (fn) => fn();
//logGreeting(greet);
//refactor de logGreeting, con una función flecha y de acuerdo a
//las especificaciones de ES6.

/*
let greetMe = function () {
    console.log('Hello from the function expression');
}
greetMe();
*/ //Versión inicial de la función greetMe sin las ventajas de ES6.

//let greetMe = () => console.log(`Hello from the function expression`);
//greetMe();
//refactor de greetMe, con una función flecha, con backticks en lugar de
//las comillas simples y sin curly braces porque solo es una línea de código.

//let x=2;

//console.log('Hola' + x + 'veces');
//Sin usar backticks.

//console.log(`Hola ${x} veces
//multilinea`);
//Usando backticks, llamando la función con el signo de pesos '$'
//Además, es multilinea y es más eficiente.

//let cuadrado = (x) => x * x;

//console.log(`${cuadrado(10)}`);


//logGreeting(function(){console.log(`Hola`)});
//Versión 1.

//logGreeting( () => {console.log(`Hola`);})
//Versión 2, en ES6.




//Practica 3

function greet(){
    console.log(`Hello`);
}
let logGreeting = (miParametro) => miParametro();

logGreeting(greet);
//Una función de primera clase, una function expression y se pasa esa función como un parámetro

logGreeting(function(){
    console.log(`Hello from a function created on the fly`)
})
//Definimos una function expression created on the fly, en la cual basicamente
//en lugar de definirla y luego mandarla a llamar en logGreeting, la estamos 
//definiendo ahi mismo, y a su vez mandandola a llamar

let logGreeting1 = (miNombre, miColor) => {
console.log("Hola " + miNombre + " buenos días! Tu color favorito es el " + miColor);
}
logGreeting1("Gustavo", "rojo");
//Este es el esquema clásico de la interpolación de strings, utilizando comillas
//dobles y el signo de + para sustituir los valores de las variables y conseguir
//un string interpolado.

//Sin embargo, para ES6 de javascript se incorporaron los "template strings",
//los cuales además de que nos dan una forma diferente de interpolar los strings
//también nos permiten hacer expresiones embedidas, strings multilinea, dar formato
//a los strings y darles tags a los mismos.

logGreeting1=(miNombre, miColor) => {
    console.log(`¡Hola ${miNombre} buenos días!,
tu color favorito es el ${miColor}.`);
}
logGreeting1(`Gustavo`, `rojo`);

//Con ES6 podemos conseguir y refactorizar el código "clásico", haciendo uso
//de las template strings, las cuales son mucho más faciles de usar, se usan
//con backticks `` y para hacer uso de funciones dentro de las strings simplemente
//usamos un signo de dinero junto con unas llaves ${}, en las cuales podemos 
//interpolar variables o poner expresiones haciendolo mucho más
//fácil y sencillo de entender, además pudiendolo hacer multilínea.

//Event loop
//Los event loops se encargan de ejecutar los códigos esperando en el callback queue
//cuando el stack está vacio. El call stack es el que se encarga de correr los procesos de
//manera asíncrona, mientras el stack sigue corriendo uno a la vez, después los manda al
//callback queue mientras hacen cola en lo que el event loop los elige para correrlos en el stack.
//Esto es aprovechado por los programadores para hacer una UI eficiente y fluida mientras se
//ejecutan procesos asincronamente.
