/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 12:00:12                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 12:36:58                               *
 *****************************************************************************/

class Bullet {
  constructor(coord, options) {
    this.options = options;
    this.inter = null;
    this.speed = 20;

    this.bullet = new Actor({
      width: 10,
      height: 20,
      color: "yellow"
    });
  
    this.bullet.spawn(game, [coord[0] - this.bullet.width/2, coord[1] - this.bullet.height]);
    this.loop();
  }

  destroy() {
    this.bullet.destroy();
    this.bullet = null;
    if (this.options.onDestroy) this.options.onDestroy();
  }

  loop() {
    this.inter = setInterval(() => {
      if (this.bullet.isSpawn()) {
        this.bullet.setPosition([this.bullet.position.x, this.bullet.position.y - this.speed]);
  
        if (this.bullet.position.y < 0 - this.bullet.height) {
          clearInterval(this.inter);
          this.inter = null;
          this.destroy();
        }
      }
    }, GAME_LOOP);
  }
}
