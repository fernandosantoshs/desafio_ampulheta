// Desafio ampulheta Mobix - Fernando Santos
let hourglass = []
const hashtag = "#", breakLine = "\n", space = " ";

function fillHourglass(size) {
  if (size < 10) { return 'Tamanho inválido, informe um número maior que 10' };

  const lastIndex = size - 1;
    
  for (let row = 0; row < size; row++) {    
    for (let column = 0; column < lastIndex; column++) {
      hourglass.push(hashtag)    
    }
    hourglass.push(hashtag + breakLine)
  };

  let linha = 0, coluna = 0;
  
  const ampulheta = hourglass.map( (item, index) => {    
    if(index % size == 0 && index != 0) {  
      linha++
      coluna = 0
    }
    
    if ( !isBorder(linha,coluna, lastIndex) && !isSand(linha,coluna, lastIndex) ) {
      coluna++
      return space
    }   
    coluna++
    return item
  });

  return ampulheta.join('');

};

function isBorder(linha, coluna, lastIndex) {
  if ( (linha == 0 || coluna == 0) || 
  (linha == lastIndex || coluna == lastIndex ) ||
  ( linha == coluna || coluna == lastIndex - linha )) {
    return true
  }
  return false 
};

function isSand(linha, coluna, lastIndex) {  
  if ( (linha > 0 && linha < lastIndex ) && 
  (coluna >= linha + 1 && coluna <  lastIndex - linha) ) {
    return true
  }
  return false
};
//Inserir o tamanho da ampulheta no parâmetro
console.log(fillHourglass(20))