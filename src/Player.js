import { ctx, canvas } from "./utils.js";
import { Fire } from "./Fire.js";

export class Player {
  level = 1;
  x = 0;
  y = canvas.height - 50;
  w = 100;
  h = 100;
  dy = 1;
  low = innerHeight - 185;
  fire = null;
  img = new Image();
  rise = false;
  jumping = false;
  
  constructor() {
    this.img.src = `../img/knight/knight${this.level}.png`;
    this.img.onload = () => ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    
  }

  shoot() {
    this.fire = new Fire(this.x + 90, this.y + 35);
  }
  draw() {
    this.img.onload();
    if (this.fire) {
      this.fire.move();
    }
    if(this.rise){
      this.dy = -15;
      this.jumping = true;
      if(this.jumping){
        this.rise = false;
        this.y = 400
      }
    }
  }

  move() {
    this.draw();
    this.y += this.dy;
    if (this.y + this.h >= this.low) {
      this.y = this.low - this.h;
    }
    if (this.y < 300) {
      this.dy++;
    }
    
  }

  moveRight() {
    this.level++;
    this.img.src = `../img/knight/knight${this.level}.png`;
    if (this.level >= 5) {
      this.level = 0;
    }
    this.x += 5;
    if (this.x >= 500) {
      this.x = 500;
    }
  }

  moveLeft() {
    this.level++;
    this.img.src = `../img/knight/knight${this.level}back.png`;
    if (this.level >= 5) {
      this.level = 0;
    }
    this.x -= 20;
    if (this.x <= 0) {
      this.x = 0;
    }
  }
  

  jump() {
    
  }
  
  
  
}