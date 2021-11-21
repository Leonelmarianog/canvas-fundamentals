import Canvas from './entity/canvas.js';
import Circle from './entity/circle.js';
import { generateNumberBetweenRange, generatePositiveOrNegativeNumber } from './utils/utils.js';

const create2dCanvas = () => {
  const $canvas = document.querySelector('canvas');
  return new Canvas($canvas, '2d');
};

// Why clientWidth and not innerWidth? Because innerWidth doesn't count the scrollbar if there is one, I want AVAILABLE SPACE
const getWindowSize = () => ({
  windowWidth: document.documentElement.clientWidth,
  windowHeight: document.documentElement.clientHeight,
});

const createRandomCircle = (ctx) => {
  let radius = generateNumberBetweenRange(30, 60);
  let x = generateNumberBetweenRange(radius, ctx.canvas.width - radius);
  let dx = 5 * generatePositiveOrNegativeNumber();
  let y = generateNumberBetweenRange(radius, ctx.canvas.height - radius);
  let dy = 5 * generatePositiveOrNegativeNumber();

  return new Circle(x, dx, y, dy, radius);
};

const createCircleArray = (amount, ctx) => {
  const circles = [];

  for (let i = 0; i < amount; i += 1) {
    const circle = createRandomCircle(ctx);
    circles.push(circle);
  }

  return circles;
};

const init = () => {
  const canvas = create2dCanvas();
  const { windowWidth, windowHeight } = getWindowSize();
  canvas.resize(windowWidth, windowHeight);

  const circles = createCircleArray(100, canvas.ctx);

  canvas.animate(() => {
    circles.forEach((circle) => {
      circle.draw(canvas.ctx);
      circle.update(canvas.ctx);
    });
  });
};

init();
