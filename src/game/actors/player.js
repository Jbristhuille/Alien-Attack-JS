/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 11:04:45                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 12:34:22                               *
 *****************************************************************************/

class Player {
  constructor() {
    this.speed = 10;
    this.player = new Actor({
      width: 50,
      height: 50,
      color: "red"
    });
  
    this.player.spawn(game, [
      game.offsetWidth/2 - this.player.width/2, 
      game.offsetHeight - this.player.height - 20
    ]);

    this.loop();
  }

  loop() {
    setInterval(() => {
      if (isKeyDown("q")) {
        if (this.player.position.x > 0) {
          this.player.setPosition([this.player.position.x + this.speed * -1, this.player.position.y]);
        }
      }
  
      if (isKeyDown("d")) {
        if (this.player.position.x < game.offsetWidth - this.player.width) {
          this.player.setPosition([this.player.position.x + this.speed * 1, this.player.position.y]);
        }
      }
  
      if (isKeyDown(" ")) {
        new Bullet([this.player.position.x + this.player.width/2, this.player.position.y]);
      }
    }, GAME_LOOP);
  }
}
