const Cuadricula = require("./cuadricula");

// let row = prompt("Ingrese las filas");
// let column = prompt("Ingrese las columnas");


let board = new Cuadricula(5,5);
board.crearMatriz()
board.llenarMatriz()
board.generarCelulas()
board.imprimirMatriz()