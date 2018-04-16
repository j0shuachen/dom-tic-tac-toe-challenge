document.addEventListener("DOMContentLoaded", () => {
  let current = 'x';
  console.log('haha');
  let tiles = document.getElementsByClassName('tile');
  // console.log(tiles);
  Array.from(tiles).forEach(item => {
    item.addEventListener('click', () => {
      // console.log(current);
      if(item.innerHTML === ''){
        item.innerHTML = current;
        current = current === 'x' ? 'o' : 'x';
      }
      if(checker(tiles)){
        alert(`Player ${checker(tiles)} has won!`);
      }
    });
  });
});

const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6]

];

function checker(tiles) {
  var winner = false;
  wins.forEach(row => {
    var temp = '';
    row.forEach(tile => {
      temp += tiles[tile].innerHTML;
    });
    if(temp === 'xxx'){
      winner = 'x';

    }else if (temp === 'ooo'){
      winner = 'o';
    }
  });
  return winner;
}
