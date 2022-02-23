//Lógica com Strings
//Criar uma ampulheta, de tamanho mínimo 20x20 "#"
// Se a linha for == [0 ou linhas - 1] ou a coluna for == [0 ou colunas-1] então essas posições serão preenchidas com "#"

function ampulhetaTop(size) {
    let hourglass = ''
    let leftToRight = [(size - (size - 1))], // 1
    rightToLeft = [(size - 2)] // 18
    let positionRight = size - (size - 1), // 1
    positionLeft = size - 2 // 18

    //Percorrer a string hourglass e adicionar uma quebra no fim da linha

    for (let row = 0; row < size; row++) {
        for ( let column = 0; column < size; column++ ) {
            /* Se a linha for > 1 e a coluna não for as bordas
            troco a # pelo espaço e a cada linha eu adiciono mais uma posição
            até chegar na coluna do meio (size/2)
            */
            if ( row > (size - (size - 1)) && column > 0 && column < size-1)   {
                /* A partir da linha indice size - (size - 1), preciso colocar um espaço
                no lugar da hashtag
                */
                if ( column in leftToRight || column in rightToLeft){
                    hourglass += " "
                    
                }               
                
            } else {
                hourglass += "#"
            } 
                   
        }
        // Se a linha não for a "borda" da ampulheta, começar a guardar as posições que serão substituidas por espaços
        if ( row > (size - (size - 1))) {
            positionRight++
            positionLeft--
    
            leftToRight.push(positionRight)
            rightToLeft.push(positionLeft)

        }
        
        // A cada linha ('size' interações), uma quebra para a próxima
        hourglass += '\n'
                        
    }

    return hourglass
}

console.log(ampulhetaTop(20));

