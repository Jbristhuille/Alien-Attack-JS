/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 12:00:12                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 12:23:26                               *
 *****************************************************************************/

var bullet;
var bulletCount = 0;
let inter;
const speed = 20;

function destroyBullet(b) {
  b.destroy();

  bulletCount = 0;
  bullet = null;
}

function loop(b) {
  inter = setInterval(() => {
    if (b.isSpawn()) {
      b.setPosition([b.position.x, b.position.y - speed]);

      if (b.position.y < 0 - b.height) {
        clearInterval(inter);
        inter = null;
        destroyBullet(b);
      }
    }
  }, GAME_LOOP);
}

function spawnBullet(coord) {
  bullet = new Actor({
    width: 10,
    height: 20,
    color: "yellow"
  });

  if (bulletCount === 0) {
    bulletCount++;
    bullet.spawn(game, [coord[0] - bullet.width/2, coord[1] - bullet.height]);

    loop(bullet);
  }
}
