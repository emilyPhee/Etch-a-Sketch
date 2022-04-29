const container = document.querySelector('.container');
const resetBtn = document.querySelector('.reset-btn');

resetBtn.addEventListener('click', () => removeClass());

for (let i = 0; i < 256; i++) {
  const div = document.createElement('div');
  div.classList.add('block');
  container.appendChild(div);
}

const blocks = document.querySelectorAll('.block');

// add class name "active" every hovered block
for (let block of blocks) {
  block.addEventListener('mouseenter', () => block.classList.add('active'));
}

// remove all class name "active" from the list
function removeClass() {
  blocks.forEach(block => {
    block.classList.remove('active');
  });
}
