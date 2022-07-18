// Clase 2.3 con recursión
// function iteración(n){
//     if(n < 1) return 1;
//     let resultado = n * iteración(n - 1);
//     console.log(`Estamos en la iteración número ${n}`);
//     return resultado
// }
// const resultado = iteración(50);

// function iteración(n){
//     if(n < 1) return 1;
//     console.log(`Estamos en la iteración número ${n}`);
//     let resultado = n * iteración(n - 1);
//     return resultado
// }
// const resultado = iteración(50);

// function iteración(n){
//     if(n < 1) return 1;
//     let resultado = n * iteración(n - 1);
//     console.log(n);
//     return resultado
// }
// const resultado = iteración(20);

// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Todos los números
// function array(n) {
//     if(n < 1) return 1;
//     let resultado = n * array(n - 1);
//     console.log(n);
//     return resultado;
// }
// const resultado = array(10);

// Todos los números * 2
// function array(n) {
//     if(n < 1) return 1;
//     let resultado = n * array(n - 1 * 2);
//     console.log(n);
//     return resultado;
// }
// const resultado = array(10);

// Todos los números pares
// function array(n) {
//     if(n < 1) return 1;
//     let resultado = n * array(n - 1);
//     if (n % 2 === 0) {
//         console.log(n);
//     }
//     return resultado;
// }
// const resultado = array(10);

// Todos los números impares
// function array(n) {
//     if(n < 1) return 1;
//     let resultado = n * array(n - 1);
//     if (n % 2 !== 0) {
//         console.log(n);
//     }
//     return resultado;
// }
// const resultado = array(10);

// Tabla del 0 al 10
// function array(n) {
//     if(n < 1) return 1;
//     let resultado = n * array(n - 1);
//     console.log(`${n} multiplicado por ${n} es igual a ${n * n}`)
//     return resultado;
// }
// const resultado = array(10);