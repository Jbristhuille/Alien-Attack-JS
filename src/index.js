/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:17:21                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-16 18:19:18                               *
 *****************************************************************************/

const game = document.querySelector("#game");

if (game) {
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
      if (player.pos.x > 0) player.move({x: -1, y: 0});
    }

    if (isKeyDown("d")) {
      if (player.pos.x < game.offsetWidth - player.options.width) player.move({x: 1, y: 0});
    }
  }, 10);
} else {
  console.error("Game zone not instanciate...");
}
