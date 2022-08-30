//Variables y operaciones

var nombre= 'Abril';
var apellido= 'Gonzalez';
 console.log (`Tu nombre es ${nombre} ${apellido}`);

 var edad, ahorrado, deuda,disponible;
 edad = parseInt(prompt('Cual es tu edad?'));
 ahorrado = parseInt(prompt('Cuanto dinero tiens ahorrado?'));
 deuda = parseInt(prompt('Cual es el monto de tu deuda?'));
 if (edad >= 18) {
    console.log ('Eres mayor de edad');
 } else{
    console.log ('Eres menor de edad');
 }


//Funciones

//Funcion=Un bloque de código que hace una serie de procedimientos
//Sirve para : Cuando se repite varias lineas de codigo en el proyecto
//Diferencia entre parametro y argumento : Parametro es una variable que está en la definición de una función, argumento son los datos que se le pasan a los parametros de una función
 function dinero(ahorrado, deuda) {
    return(ahorrado - deuda);
 }
disponible = dinero(ahorrado,deuda);

console.log (`Tu dinero disponible es ${disponible}`);



//Condicionales

//¿Qué es una condicional?
//Un grupo de instrucciones que se ejecuta segun el resultado de una evaluación

//Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
//If, else if, switch y ternario

//Se pueden convinar funciones y condicionales


//Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
 }

//if-else

var tipoDeSuscripcion = "basic";
if(tipoDeSuscripcion === 'Free'){
	console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
	console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'Expert+') {
	console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Codigo solo con if
const tipoDeSuscripcion = 'basic';
if (tipoDeSuscripcion === 'Free') {
  console.log('Solo puedes tomar los cursos gratis');
} else {
  if (tipoDeSuscripcion === 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante un mes');
  } else {
    if (tipoDeSuscripcion === 'Expert') {
      console.log(
        'Puedes tomar casi todos los cursos de Platzi durante un año'
      );
    } else {
      if (tipoDeSuscripcion === 'Expert+') {
        console.log(
          'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
        );
      }
    }
  }
}


//Ciclos

//¿Qué es un ciclo?
//Un bloque de codigo que se repite n veces

//¿Qué tipos de ciclos existen en JavaScript?
//for, for of, for in, while, do-while

//¿Qué es un ciclo infinito y por qué es un problema?
//Es un ciclo que nunca se va a detener, puede causar que nuestro ordenador se apague por exceso consumo de memoria en el navegador

//¿Puedo mezclar ciclos y condicionales?
//Si se puede


//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//respuesta
let i = 0;
while (i < 5) {
	console.log("El valor de i es: " + i);
	i++;
}

i = 10;
while (i >= 2) {
	console.log("El valor de i es: " + i);
	i--;
}


//Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

let respuesta = 0;
respuesta = prompt('¿Cual es el resultado de 2 + 2?')
if (respuesta == 4) {
    console.log ('Tu respuesta es correcta');    
} else {
    console.log('Tu respuesta es erronea');
}




//Listas

//¿Qué es un array?
//Son un conjunto de valores del mismo tipo almacenados en una sola variable

//¿Qué es un objeto?
//Un objeto es una colección de propiedades

//¿Cuándo es mejor usar objetos o arrays?
//Su uso depende de la necesidad del problema

//¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
//Si se pueden mezclar


//Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.
const unaFuncion1 = (array) => {
    console.log(array[0]);
  };


//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo
let frutas = ['Pera', 'Manzana', 'Sandia'];
const unaFuncion2 = (array) => {
    array.forEach((elem) => {
      console.log(elem);
    });
  };


//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo
let persona = {
    nombre: 'Oscar',
    apellido: 'Aguilar',
    edad: 21
  }
  const unaFuncion3 = (objeto) => {
    Object.values(objeto).forEach((elem) => {
      console.log(elem);
    });
  };
  
  unaFuncion(persona);