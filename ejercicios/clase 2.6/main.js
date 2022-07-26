// const Zapatilla = {
//     talle: '39',
//     color: 'rosa',
//     marca: 'Nike',
// }

// console.log(`Soy una zapatilla ${Zapatilla.marca} de talle ${Zapatilla.talle} y color ${Zapatilla.color}.`);

// const Zapatilla2 = {
//     talle: '37',
//     color:'blanco',
//     marca:'Adidas',
// }

// const comparar = (Zapatilla, Zapatilla2) => {
//     if(Zapatilla.talle > Zapatilla2.talle) {
//         console.log(`El talle de la zapatilla ${Zapatilla.marca} es mayor que el de la zapatilla ${Zapatilla2.marca}.`);
//     } else if (Zapatilla.talle < Zapatilla2.talle) {
//         console.log(`El talle de la zapatilla ${Zapatilla.marca} es menor que el de la zapatilla ${Zapatilla2.marca}.`);
//     } else {
//         console.log(`El talle de ambas zapatillas son iguales.`);
//     }
// }

// comparar(Zapatilla, Zapatilla2);

// class zapatilla {
//     constructor(talle, color, marca, precio) {
//         this.talle = talle;
//         this.color = color;
//         this.marca = marca;
//         this.precio = precio;
//         this.getInfo = function() {
//             return `Soy una zapatilla ${this.marca} de color ${this.color} y de talle ${this.talle}`;
//         };
//     }
// }

// let miZapatilla = new zapatilla ('41', 'rojo', 'Vans', '$21.999');
// let miZapatilla2 = new zapatilla ('37', 'azul', 'Adidas', '$32.999');

// const compararZapatillas = (miZapatilla, miZapatilla2) => {
//     if (miZapatilla.precio > miZapatilla2.precio) {
//         console.log(`La zapatilla ${miZapatilla.marca} es la más cara del mercado, con un valor de ${miZapatilla.precio}`);
//     } else if (miZapatilla2.precio > miZapatilla.precio) {
//         console.log(`La zapatilla ${miZapatilla2.marca} es la más cara del mercado, con un valor de ${miZapatilla2.precio}`);
//     } else {
//         console.log(`Las zapatillas ${miZapatilla.marca} y ${miZapatilla2.marca} son las más caras del mercado, con un valor de ${miZapatilla.precio}`);
//     }
// }

// compararZapatillas(miZapatilla, miZapatilla2);