const player = {
  x: 180,
  y: 450,
  width: 40,
  height: 15,
  speed: 5,

  update() {
    if (keys.ArrowLeft && this.x > 0) this.x -= this.speed;
    if (keys.ArrowRight && this.x < 360) this.x += this.speed;
  },

  draw(ctx) {
    ctx.fillStyle = "cyan";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};
