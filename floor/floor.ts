import './floor.scss';

let speed = 10;
let turn = 0;
const MAX_SPEED = 20;

window.addEventListener('keydown', (e: KeyboardEvent) => {
  switch (e.key) {
    case 'ArrowUp':
      speed -= 1;
      break;
    case 'ArrowDown':
      speed += 1;
      break;
    case 'ArrowLeft':
      turn -= 3;
      break;
    case 'ArrowRight':
      turn += 3;
      break;
  }
  if (speed < 1) {
    speed = 1;
  }
  if (speed > MAX_SPEED) {
    speed = MAX_SPEED;
  }

  turn %= 360;

  document.body.style.setProperty('--speed', `${speed}s`);
  document.body.style.setProperty('--turn', `${-1 * turn}deg`);
});

console.log(
  'Texture - Image by macrovector: https://www.freepik.com/free-vector/seamless-green-grass-pattern_13187581.htm',
);
