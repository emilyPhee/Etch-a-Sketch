const container = document.querySelector('.grid-container');
const resetBtn = document.querySelector('.clear-btn');
const gridCountInput = document.querySelector('#grid-count');
const submitBtn = document.querySelector('.submit-btn');

let gridSize = 16;

createGrid();

resetBtn.addEventListener('click', () => removeClass());

submitBtn.addEventListener('click', () => {
  if (
    parseInt(gridCountInput.value) > 100 ||
    parseInt(gridCountInput.value) < 5 ||
    parseInt(gridCountInput.value) === NaN
  ) {
    alert('Please choose grid size between 5 to 100');

    // remove text input
    gridCountInput.value = '';
  }

  gridSize = parseInt(gridCountInput.value);

  // remove child nodes
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid();

  // remove text input
  gridCountInput.value = '';
});

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
  const blocks = document.querySelectorAll('.block');
  blocks.forEach(block => {
    block.classList.remove('active');
  });
}
