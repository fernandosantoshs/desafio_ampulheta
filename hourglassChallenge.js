// Desafio ampulheta Mobix - Fernando Santos

let hourglass = []
const hashtag = "#", space = "\n";

function fillHourglass(size) {

  for (let row = 0; row < size; row++) {
    hourglass.push(hashtag);

    for (let column = 0; column < size; column++) {
      hourglass.push(hashtag)
    }

    hourglass.push(space)
  };

  return hourglass.join('')

}

console.log(fillHourglass(20))