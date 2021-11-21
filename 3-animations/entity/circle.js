class Circle {
  constructor(x, dx, y, dy, radius) {
    this.x = x;
    this.dx = dx;
    this.y = y;
    this.dy = dy;
    this.radius = radius;
    this.startAngle = 0;
    this.endAngle = Math.PI * 2;
  }

  draw(ctx, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle);
    ctx.strokeStyle = color;
    ctx.fill();
    ctx.stroke();
  }

  update(ctx) {
    if (this.x > ctx.canvas.width - this.radius) {
      this.dx = -this.dx;
    }

    if (this.x < 0 + this.radius) {
      this.dx = -this.dx;
    }

    if (this.y > ctx.canvas.height - this.radius) {
      this.dy = -this.dy;
    }

    if (this.y < 0 + this.radius) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }
}

export default Circle;
