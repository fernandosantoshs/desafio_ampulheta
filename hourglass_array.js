// Lógica com array de arrays

function ampulheta(size) {
  let ampulheta = "",
    matriz = [],
    halfSize = Math.round((size / 2))
    startColumn = 1,
    endColumn = Number(size - 2)
    
    // size - coluna = posicao inicial dos espacos do final
    //console.log(posInicial) //1 
    //console.log(posFinal) // 18
    //console.log(halfSize) // 10

  for (let rows = 0; rows < halfSize; rows++) {
    matriz[rows] = []

    for (let columns = 0; columns <= size; columns++) {
        matriz[rows][columns] = "#"         
    }    
  }

  for (let i = 0; i < halfSize; i++) {
    for (let j = 0; j < size; j++) {
      if (j < size ) {
        ampulheta += matriz[i][j]
      }
    }

    ampulheta += "\n"
  }

  return ampulheta
}

console.log(ampulheta(20))

// let espacos = []
// espacos.push(1,2,3,4,5)
// console.log(espacos)