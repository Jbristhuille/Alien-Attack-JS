/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-17 14:12:05                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-17 14:15:24                               *
 *****************************************************************************/

class Alien {
  constructor(coord) {
    this.alien = new Actor({
      width: 50,
      height: 50,
      color: "purple"
    });
    
    this.alien.spawn(game, coord);
  }
}
