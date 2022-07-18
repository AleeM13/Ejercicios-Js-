// Clase 2.3
// for (let i = 1; i <= 50; i++) {
//     console.log(`Estamos en la iteración número ${i}`);
// }

// for (let i = 50; i > 0; i--) {
//     console.log(`Estamos en la iteración número ${i}`);
// }

// let contador = 1;
// while (contador < 20) {
//     console.log(contador);
//     contador++;
// }
// console.log(contador);


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Todos los números
// for (let i = 0; i < numeros.length; i++) {
//   console.log(numeros[i])
// }

// // Array *2
// for (let doble = 0; doble < numeros.length; doble++) {
//   console.log(numeros[doble] * 2);
// }

// // Primeros 5
// for (let cinco = 0; cinco <= 9; cinco++) {
//   if (cinco === 5) {
//     break;
//   }
//   console.log(numeros[cinco]);
// }

// // Todos menos el 7
// for (let siete = 0; siete <= 9; siete++) {
//   if (numeros[siete] === 7) {
//     continue;
//   }
//   console.log(numeros[siete]);
// }

// // Todos los pares
// for (let pares = 0; pares <= 9; pares++) {
//   if (numeros[pares] % 2 === 0) {
//   	console.log(numeros[pares]);    
//   }
// }

// // Todos los impares
// for (let impares = 0; impares <= 9; impares++) {
//   if (numeros[impares] % 2 !== 0) {
//   	console.log(numeros[impares]);    
//   }
// }

// // Tabla del 0 al 10
// for (let i = 0; i <= 10; i++) {
//   for (let tabla = 0; tabla < 10; tabla++) {
//     console.log(`${numeros[tabla]} multiplicado por ${i} es igual a ${numeros[tabla] * i}`)
//   }
// }