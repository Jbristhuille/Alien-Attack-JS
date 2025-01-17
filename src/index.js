/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:17:21                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 14:47:46                               *
 *****************************************************************************/

const game = document.querySelector("#game");
const sceneManager = new SceneManager({
  onCollide: (a, b) => {
    a.destroy();
    b.destroy();
  }
});

if (game) {
  new Player();
  new Alien([0.3 * game.offsetWidth, 10]);
  new Alien([0.5 * game.offsetWidth, 10]);
  new Alien([0.7 * game.offsetWidth, 10]);
} else {
  console.error("Game zone not instanciate...");
}
