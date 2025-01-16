/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:27:01                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-16 17:42:29                               *
 *****************************************************************************/

class Actor {
  constructor(options) {
    this.elem = null;
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
  }

  spawn(game, coord) {
    this.elem = document.createElement("div");

    this.applyOptions();
    this.setPosition(coord);

    game.append(this.elem);
  }
}
