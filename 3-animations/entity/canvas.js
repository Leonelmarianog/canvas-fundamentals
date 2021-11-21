class Canvas {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {string} contextId
   */
  constructor(canvas, contextId) {
    /**
     * @type {RenderingContext}
     */
    this.ctx = canvas.getContext(contextId);
    this.animate = this.animate.bind(this);
  }

  /**
   * @param {number} width
   * @param {number} height
   */
  resize(width, height) {
    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;
  }

  /**
   * @param {Function} cb
   */
  animate(cb) {
    requestAnimationFrame(() => this.animate(cb));

    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    cb();
  }
}

export default Canvas;
