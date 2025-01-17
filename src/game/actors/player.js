/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 11:04:45                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 11:08:16                               *
 *****************************************************************************/

function playerInit() {
  const player = new Actor({
    width: 50,
    height: 50,
    speed: 10,
    color: "red"
  });

  player.spawn(game, [
    game.offsetWidth/2 - player.options.width/2, 
    game.offsetHeight - player.options.height - 20
  ]);

  setInterval(() => { // Game loop
    if (isKeyDown("q")) {
      if (player.pos.x > 0) {
        player.setPosition([player.position.x + player.speed * -1, player.position.y]);
      }
    }

    if (isKeyDown("d")) {
      if (player.pos.x < game.offsetWidth - player.options.width) {
        player.setPosition([player.position.x + player.speed * 1, player.position.y]);
      }
    }

    if (isKeyDown(" ")) {
      // spawn projectile and move it
    }
  }, GAME_LOOP);
}
