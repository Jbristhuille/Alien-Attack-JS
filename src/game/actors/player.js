/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 11:04:45                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 12:31:06                               *
 *****************************************************************************/

function playerInit() {
  const speed = 10;
  const player = new Actor({
    width: 50,
    height: 50,
    color: "red"
  });

  player.spawn(game, [
    game.offsetWidth/2 - player.options.width/2, 
    game.offsetHeight - player.options.height - 20
  ]);

  setInterval(() => { // Game loop
    if (isKeyDown("q")) {
      if (player.pos.x > 0) {
        player.setPosition([player.position.x + speed * -1, player.position.y]);
      }
    }

    if (isKeyDown("d")) {
      if (player.pos.x < game.offsetWidth - player.options.width) {
        player.setPosition([player.position.x + speed * 1, player.position.y]);
      }
    }

    if (isKeyDown(" ")) {
      new Bullet([player.position.x + player.width/2, player.position.y]);
    }
  }, GAME_LOOP);
}
