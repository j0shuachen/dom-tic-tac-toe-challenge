document.addEventListener("DOMContentLoaded", () => {
  let current = 'x';
  console.log('haha');
  let tiles = document.getElementsByClassName('tile');
  console.log(tiles);
  Array.from(tiles).forEach(item => {
    item.addEventListener('click', () => {
      console.log(current);
      item.innerHTML = current;
      current = current === 'x' ? 'o' : 'x';
    });
  });

});
