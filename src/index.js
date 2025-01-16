/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:17:21                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-16 17:40:21                               *
 *****************************************************************************/

const game = document.querySelector("#game");

if (game) {
  const player = new Actor({
    width: 50,
    height: 50,
    color: "red"
  });

  player.spawn(game, [0, 0]);
} else {
  console.error("Game zone not instanciate...");
}
