class Cuadricula{
    constructor(rows, columns) {
      this.rows = rows;
      this.columns = columns;
      this.matriz = [];
    }
    crearMatriz() {
        for(let i = 0; i < this.columns; i++){
            this.matriz[i] = new Array(this.rows);
        }
        return this.matriz
    }
    llenarMatriz() {
        for(let i = 0; i < this.columns; i++){
          for(let j=0; j<this.rows;j++){
            this.matriz[i][j]= Math.floor(Math.random()*2);
          }
        }
        return this.matriz
    }

    generarCelulas(){
        for(let i = 0; i < this.columns; i++){
            for(let j=0; j<this.rows;j++){
             this.matriz[i][j] === 1 ? this.matriz[i][j] = '*' : this.matriz[i][j] = '.'; 
            }
          }
          return this.matriz
        }

    imprimirMatriz() {
      for(let i=0; i<this.matriz.length; i++){
        let line= '';
        for (let j = 0; j < this.matriz[i].length; j++) {
            line += this.matriz[i][j] + ' '; 
        }
        console.log(line);
      }
      return '';
    }
    // check(columns, column) {
    //     if (
    //       this.matriz[columns][column] === "." &&
    //       countNeightbours(columns, column) === 3
    //     ) {
    //       secondGeneration[columns][column] = "*";
    //     } else if (
    //       this.matriz[columns][column] === "*" &&
    //       (countNeightbours(columns, column) < 2 ||
    //         countNeightbours(columns, column) > 3)
    //     ) {
    //       secondGeneration[columns][column] = ".";
    //     } else {
    //       this.matriz[columns][column] = secondGeneration[columns][column];
    //     }
    //   }

    // countNeightbours(columns, column) {
    //     let count = 0;
    //     if (this.matriz[columns][column] === ".") {
    //       if (this.matriz[columns][column - 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns][column + 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns - 1][column] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns + 1][column] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns + 1][column - 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns + 1][column + 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns - 1][column - 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns - 1][column + 1] === "*") {
    //         count = count + 1;
    //       }
    //       return count;
    //     } else {
    //       if (this.matriz[columns][column - 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns][column + 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns - 1][column] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns + 1][column] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns + 1][column - 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns + 1][column + 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns - 1][column - 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[columns - 1][column + 1] === ".") {
    //         count = count + 1;
    //       }
    //       return count;
    //     }
    //   }
    
    // }
}
module.exports = Cuadricula;




