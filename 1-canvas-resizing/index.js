const $canvas = document.querySelector('canvas');

// Resizing canvas

$canvas.width = document.documentElement.clientWidth;
$canvas.height = document.documentElement.clientHeight;

// Creating a drawing context - It contains various methods for drawing on the canvas

const ctx = $canvas.getContext('2d');

// Drawing a rectangle

const x_coord = 100;
const y_coord = 100;
const width = 100;
const height = 100;

ctx.fillRect(x_coord, y_coord, width, height);
