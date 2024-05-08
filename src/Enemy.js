import { ctx, canvas } from "./utils.js";
export class Enemy {
  x = innerWidth - 600;
  y = innerHeight - 150;
  w = 50;
  h = 50;
  dx = Math.floor(Math.random() * 5) + 1;

  img = new Image();
  constructor() {
    this.img.src = "../img/enemy.PNG";
    this.img.onload = () =>
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  draw() {
    this.img.onload();
  }

  move() {
    this.draw();
    this.x -= 2;
    if (this.x < 0) {
      this.x = innerWidth + 100;
      this.dx = Math.floor(Math.random() * 5) + 1;
    }
  }
}