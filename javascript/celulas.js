class Celula{
    
    contructor (x,y){
    this.x = x
    this.y = y
    this.cell = false
    }
}

class Cuadricula{
    constructor(rows, colums){
        this.rows = rows
        this.colums = colums
        this.matriz = []
    }
    
    crearMatriz(){
        for (let i = 0; i < this.rows; i++) {
            this.matriz[i] = new Array(this.columns);
        }
        return this.matriz
    }

    llenarMatriz(){
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.colums; j++) {
                this.matriz[i][j] = '.'
            }
        }
        return this.matriz
    }
}

var rows = prompt("Num de filas: ")
var colums = prompt("Numero de columnas: ")

exports = Cuadricula;




