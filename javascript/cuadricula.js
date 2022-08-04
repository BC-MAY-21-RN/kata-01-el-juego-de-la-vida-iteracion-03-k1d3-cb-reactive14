class Cuadricula{
    constructor(columns, rows) {
      this.columns = columns;
      this.rows = rows;
      this.matriz = [];
    }
    crearMatriz() {
        for(let i = 0; i < this.rows; i++){
            this.matriz[i] = new Array(this.columns);
        }
        return this.matriz
    }
    llenarMatriz() {
        for(let i = 0; i < this.rows; i++){
          for(let j=0; j<this.columns;j++){
            this.matriz[i][j]= Math.floor(Math.random()*2);
          }
        }
        return this.matriz
    }

    generarCelulas(){
        for(let i = 0; i < this.rows; i++){
            for(let j=0; j<this.columns;j++){
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
    
    // check(rows, column) {
    //     if (
    //       this.matriz[rows][column] === "." &&
    //       countNeightbours(rows, column) === 3
    //     ) {
    //       secondGeneration[rows][column] = "*";
    //     } else if (
    //       this.matriz[rows][column] === "*" &&
    //       (countNeightbours(rows, column) < 2 ||
    //         countNeightbours(rows, column) > 3)
    //     ) {
    //       secondGeneration[rows][column] = ".";
    //     } else {
    //       this.matriz[rows][column] = secondGeneration[rows][column];
    //     }
    //   }

    // countNeightbours(rows, column) {
    //     let count = 0;
    //     if (this.matriz[rows][column] === ".") {
    //       if (this.matriz[rows][column - 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows][column + 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows - 1][column] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows + 1][column] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows + 1][column - 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows + 1][column + 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows - 1][column - 1] === "*") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows - 1][column + 1] === "*") {
    //         count = count + 1;
    //       }
    //       return count;
    //     } else {
    //       if (this.matriz[rows][column - 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows][column + 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows - 1][column] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows + 1][column] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows + 1][column - 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows + 1][column + 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows - 1][column - 1] === ".") {
    //         count = count + 1;
    //       }
    //       if (this.matriz[rows - 1][column + 1] === ".") {
    //         count = count + 1;
    //       }
    //       return count;
    //     }
    //   }
    
    // }
}
module.exports = Cuadricula;




