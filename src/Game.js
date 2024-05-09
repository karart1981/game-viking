import { ctx, canvas } from "./utils.js";
import { Fire } from "./Fire.js";
import { Decoration } from "./Decoration.js";
import { Platform } from "./Platform.js";
import { Player } from "./Player.js";
import { Enemy } from "./Enemy.js";


export class Game {
    score = 5;
    enemy = new Enemy();
    platforms = [
      new Platform(0, innerHeight - 100, 1000, 100),
      new Platform(innerWidth+400, innerHeight - 100, 1000, 100),
      new Platform(innerWidth+1000, innerHeight - 100, 1000, 100),
      new Platform(innerWidth*3+200, innerHeight - 100, 1000, 100),
      new Platform(innerWidth*4-200, innerHeight - 100, 1000, 100),
      new Platform(innerWidth*4+800, innerHeight - 100, 1000, 100),

      new Platform(innerWidth-80, 300, 300, 50),
      new Platform(innerWidth*3-300, 300, 300, 50),
    ];
    objects = [
      new Decoration(0, innerHeight - 600, innerWidth, innerHeight-50, "../img/background4.png"),
      new Decoration(innerWidth, innerHeight - 600, innerWidth, innerHeight, "../img/background4.png"),
      new Decoration(innerWidth*2, innerHeight - 600, innerWidth, innerHeight, "../img/background4.png"),
      new Decoration(innerWidth*3, innerHeight - 600, innerWidth, innerHeight, "../img/background4.png"),
      new Decoration(innerWidth*4, innerHeight - 600, innerWidth, innerHeight, "../img/background4.png"),
      new Decoration(1000, innerHeight - 100, 350, 100, "../img/lava2.jpg"),
      new Decoration(1350, innerHeight - 100, 350, 100, "../img/lava2.jpg"),
      new Decoration(innerWidth*3-500, innerHeight - 100, 350, 100, "../img/lava2.jpg"),
      new Decoration(innerWidth*3-150, innerHeight - 100, 350, 100, "../img/lava2.jpg"),
      new Decoration(innerWidth*4+800, innerHeight-490, 400, 400, "../img/kingdom.jpg"),
      new Decoration(innerWidth*4+850, innerHeight-375, 70, 70, "../img/princess2.jpg"),
      new Decoration(innerWidth*4+250, innerHeight-440, 400, 400, "../img/dragon1.jpg"),

    ];
    player = new Player();
    
  
    constructor() {
      this.id = requestAnimationFrame(() => this.run());
      window.onkeydown = (e) => {
        if (e.key == "ArrowRight") {
          this.moveRight();
        }
        if (e.key == "ArrowLeft") {
          this.player.moveLeft();
        }
        if (e.key == " ") {
          this.player.shoot();
        }
        if (e.key == "ArrowUp") {
          this.player.rise = true;
        }
      };
    }
  
    moveRight() {
      this.player.moveRight();
      if (this.player.x == 500) {
        [...this.objects, ...this.platforms].forEach((p) => (p.x -= 5));
      }
      if(this.objects[3].x == -1299){
        cancelAnimationFrame(this.id);
        
      }
    }
  
    run() {
      ctx.font = "100px Fantacy";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#000";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.id = requestAnimationFrame(() => this.run());
      this.objects.forEach((p) => p.draw());
      this.platforms.forEach((p) => p.draw());
      this.player.move();
      console.log(this.player.y);
      this.checkPlatforms();
      this.enemy.move();
      if (Math.abs(this.player.x - this.enemy.x) < 30) {
        if (Math.abs(this.player.y - this.enemy.y) < 50) {
          this.score--;
          cancelAnimationFrame(this.id);
          this.enemy.x -= 1000;
          this.player.x = 0;
          if(this.score > 0){
            ctx.fillText(`Live ${this.score}`, innerWidth / 2, innerHeight / 2);
          setTimeout(()=>{
            this.id = requestAnimationFrame(() => this.run());
          },2000)
          }
          if(this.score == 0){
            cancelAnimationFrame(this.id);
            ctx.fillText(`Game Over`, innerWidth / 2, innerHeight / 2);
           }
        }

      }
      if(this.objects[6].x <= 900 && this.player.y > innerHeight - 100){
        this.score--;
          cancelAnimationFrame(this.id);
          if(this.score > 0){
            ctx.fillText(`Live ${this.score}`, innerWidth / 2, innerHeight / 2);
          setTimeout(()=>{
            this.player.x = 10;
            this.player.y -= 100;
            this.id = requestAnimationFrame(() => this.run());
          },2000)
          }
          if(this.score == 0){
            cancelAnimationFrame(this.id);
            ctx.fillText(`Game Over`, innerWidth / 2, innerHeight / 2);
           }
      }
    }
  
    checkPlatforms() {
      let { x, y } = this.player;
      let last = this.platforms
        .filter((p) => x >= p.x - 70 && x <= p.x + p.w - 70 && y < p.y)
        .at(-1);
      if (last) {
        this.player.low = last.y + 10;
      } else {
        this.player.low = innerHeight + 100;
      }
    }
  }