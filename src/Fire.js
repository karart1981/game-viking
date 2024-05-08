import { ctx, canvas } from "./utils.js";

export class Fire {
  img = new Image();

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.img.src = "../img/fire.PNG";
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, 40, 40);
  }

  draw() {
    this.img.onload();
  }

  move() {
    this.draw();
    this.x += 3;
  }
}

