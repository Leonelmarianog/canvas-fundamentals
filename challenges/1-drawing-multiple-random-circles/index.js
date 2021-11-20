const createCanvas = () => {
  const $canvas = document.querySelector('canvas');
  $canvas.width = document.documentElement.clientWidth;
  $canvas.height = document.documentElement.clientHeight;
  return $canvas;
};

const generateRandomCircleProps = (canvas) => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  return { x, y, color };
};

const drawCircle = (ctx, { x, y, radius, startAngle, endAngle, counterClockWise, color }) => {
  ctx.beginPath();
  ctx.arc(x, y, radius, startAngle, endAngle, counterClockWise);
  ctx.strokeStyle = color;
  ctx.stroke();
};

const drawRandomCircle = (ctx) => {
  const { x, y, color } = generateRandomCircleProps(ctx.canvas);
  drawCircle(ctx, { x, y, radius: 30, startAngle: 0, endAngle: Math.PI * 2, color });
};

const init = () => {
  const $canvas = createCanvas();
  const ctx = $canvas.getContext('2d');

  setInterval(() => drawRandomCircle(ctx), 1000);
};

init();
