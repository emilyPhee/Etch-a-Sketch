const container = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.clear-btn');
const gridCountInput = document.querySelector('#grid-count');
const submitBtn = document.querySelector('.submit-btn');

let gridSize = 16;

createGrid();

resetBtn.addEventListener('click', () => removeClass());

submitBtn.addEventListener('click', () => {
  gridSize = parseInt(gridCountInput.value);
  console.log(gridSize);

  // remove child nodes
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid();
});

console.log(gridSize);

// for (let i = 0; i < gridSize * gridSize; i++) {
//   const div = document.createElement('div');
//   div.classList.add('block');
//   // div.style.cssText = 'border: 1px solid black; height: 15px; width: 15px;';
//   div.style.width = 'calc(500px / gridSize);';
//   div.style.height = 'calc(500px / gridSize);';
//   container.appendChild(div);
// }

// const blocks = document.querySelectorAll('.block');

// // add class name "active" every hovered block
// for (let block of blocks) {
//   block.addEventListener('mouseenter', () => block.classList.add('active'));
// }

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const div = document.createElement('div');
    div.classList.add('block');
    div.style.width = 'calc(500px / gridSize);';
    div.style.height = 'calc(500px / gridSize);';
    container.appendChild(div);
  }

  const blocks = document.querySelectorAll('.block');

  // add class name "active" every hovered block
  for (let block of blocks) {
    block.addEventListener('mouseenter', () => block.classList.add('active'));
  }

  container.style.setProperty(
    'grid-template-columns',
    `repeat(${gridSize}, ${500 / gridSize}px [col-start])`
  );
}
// remove all class name "active" from the list
function removeClass() {
  blocks.forEach(block => {
    block.classList.remove('active');
  });
}
