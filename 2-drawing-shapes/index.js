const $canvas = document.querySelector('canvas');

$canvas.width = document.documentElement.clientWidth;
$canvas.height = document.documentElement.clientHeight;

const ctx = $canvas.getContext('2d');

// Drawing rectangles

ctx.fillStyle = '#f00';
ctx.fillRect(100, 100, 100, 100); // takes the fill style defined before

ctx.fillStyle = '#0f0';
ctx.fillRect(200, 200, 100, 100); // takes the fill style defined before

ctx.fillStyle = '#00f';
ctx.fillRect(300, 300, 100, 100); // takes the fill style defined before

// Drawing Lines

ctx.beginPath();
ctx.moveTo(600, 100);
ctx.lineTo(800, 100);
ctx.lineTo(800, 150);
ctx.lineTo(850, 150);
ctx.lineTo(850, 100);
ctx.strokeStyle = '#f00';
ctx.stroke();

// Circles & Arcs

const x_coord = 1200;
const y_coord = 100;
const radius = 30;
const startAngle = 0; // radians
const endAngle = Math.PI * 2; // radians - full circle
const counterClockWise = false; //default

ctx.beginPath();
ctx.arc(x_coord, y_coord, radius, startAngle, endAngle, counterClockWise);
ctx.strokeStyle = '#000';
ctx.stroke();
