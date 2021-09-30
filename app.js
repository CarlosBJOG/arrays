require('colors');
                   // 0          1       2                         3        
let totalColores = ['verde', 'azul', 'amarillo', ['manzana', 'pera', 'platano']];
let i = 3;


//obtener la longitud de un array
console.log(totalColores.length);

let calificaciones = [ 5, 6, 10, 3, 5, 10 , 3];

//total de calificaciones, obtener el total 
console.log('El total de calificaciones es: '+calificaciones.length);

// quitar datos a un array pop() 
const valorEliminado = calificaciones.pop();
console.log(valorEliminado);

 //agregar datos al principio de un array 
 calificaciones.unshift(1, 8, 19, 29);
 console.log(calificaciones);

 //agregar datos al final de un array 

 calificaciones.push(7);
 console.log(calificaciones);

 //sustituir un valor dentro de una cadena
const frase = 'El bop esta bien pendejo';

console.log(frase.replace('bop', 'jose'));

//encontrar elemento en un array
const array1 = [5, 12, 8, 130, 44, 66, 12, 23];
let id = 15;
const found = array1.find(value => value === id);
if(found === undefined){
    console.log('Error no existe el dato')
}
console.log(found);

//acceder al ultimo registro de un array sin conocer la longitud de
console.log(array1[ array1.length - 1 ]);

//objetos 

const array = [1, 2];
const objeto = {
        num1: 1,
        num2: 2
    }
console.log(array[array.length - 1]);
console.log(objeto.num2);

const persona = {
    nombre: 'Carlos',
    apellido: 'Perez',
    edad: 19,
    ciudad: 'Ciudad de Mexico',
    pasatiempo: 'Programar',
}

array.push(persona)

console.log(array[array.length - 1].pasatiempo);