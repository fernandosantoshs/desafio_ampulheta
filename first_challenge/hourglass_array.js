// Lógica com array de arrays

function ampulheta(size){
    let ampulheta = '',
    matriz = []

    for(let rows = 0; rows < size; rows++) {
        matriz[rows] = []     
        for (let columns = 0; columns < size; columns++){
           matriz[rows][columns] = "#" 
        }
    }

    for(let i = 0; i < size; i++ ){
        for ( let j = 0; j < size; j++){
            if ( j < size - 1){
                ampulheta += matriz[i][j]
            }
        }
        ampulheta += "\n"
    }

    return ampulheta
}


console.log(ampulheta(20))

//console.log([rows,columns])