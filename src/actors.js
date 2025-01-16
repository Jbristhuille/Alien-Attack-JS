/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:27:01                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-16 18:18:15                               *
 *****************************************************************************/

class Actor {
  constructor(options) {
    this.elem = null;
    this.pos = {x: 0, y: 0};
    this.options = options;
  }

  applyOptions() {
    this.elem.style.position = "absolute";
    this.elem.style.width = `${this.options.width || 0}px`;
    this.elem.style.height = `${this.options.height || 0}px`;
    this.elem.style.background = this.options.color;
  }

  setPosition(coord) {
    this.elem.style.left = `${coord[0]}px`;
    this.elem.style.top = `${coord[1]}px`;
    this.pos = {x: coord[0], y: coord[1]};
  }

  spawn(game, coord) {
    this.elem = document.createElement("div");

    this.applyOptions();
    this.setPosition(coord);

    game.append(this.elem);
  }

  move(obj) {
    this.setPosition([
      this.pos.x + this.options.speed * obj.x,
      this.pos.y + this.options.speed * obj.y
    ]);
  }
}
