import {ctx,canvas} from './utils.js';

export class Dragon {
  x = 700;
  y = innerHeight - 440;
  w = 400;
  h = 400;
  img = new Image();
  constructor(){
    this.img.src = `../img/dragon1.jpg`;
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  draw() {
    this.img.onload();
    /*if (this.fire) {
      this.fire.move();
    }*/
  }
  move(){
    this.draw();
  }
}

