/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 14:15:49                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 14:57:41                               *
 *****************************************************************************/

class SceneManager {
  constructor(options) {
    this.actors = [];
    this.onCollide = options.onCollide || null;

    this.loop();
  }

  addActor(actor) {
    this.actors.push(actor);
  }

  removeActor(id) {
    const i = this.actors.findIndex((el) => el.id === id);
    if (i !== -1) this.actors.splice(i, 1);
  }

  loop() {
    setInterval(() => {
      for(let i = 0; i < this.actors.length; i++) {
        for(let p = 0; p < this.actors.length; p++) {
          if (this.actors[i].id !== this.actors[p].id) {
            let a = {
              xMin: this.actors[i].position.x,
              xMax: this.actors[i].position.x + this.actors[i].width,
              yMin: this.actors[i].position.y,
              yMax: this.actors[i].position.y + this.actors[i].height
            };

            let b = {
              xMin: this.actors[p].position.x,
              xMax: this.actors[p].position.x + this.actors[p].width,
              yMin: this.actors[p].position.y,
              yMax: this.actors[p].position.y + this.actors[p].height
            }

            if ((b.xMin > a.xMin || b.xMax > a.xMin) && (b.xMin < a.xMax || b.xMax < a.xMax) &&
                (b.yMin > a.yMin || b.yMax > a.yMin) && (b.yMin < a.yMax || b.yMax < a.yMax)) {
              if (this.onCollide) this.onCollide(this.actors[i], this.actors[p]);
            }
          }
        }
      }
    }, GAME_LOOP);
  }
}
