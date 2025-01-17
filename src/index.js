/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:17:21                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 12:33:55                               *
 *****************************************************************************/

const game = document.querySelector("#game");

if (game) {
  new Player();
} else {
  console.error("Game zone not instanciate...");
}
