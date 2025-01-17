/******************************************************************************
 * @Author                : Jbristhuille<jbristhuille@gmail.com>              *
 * @CreatedDate           : 2025-01-16 17:59:58                               *
 * @LastEditors           : Jbristhuille<jbristhuille@gmail.com>              *
 * @LastEditDate          : 2025-01-16 18:26:52                               *
 *****************************************************************************/

const keys = [];

const addKey = (event) => {
  if (!keys.find(k => k === event.key)) keys.push(event.key);
}

const removeKey = (event) => {
  let i = keys.findIndex(k => k === event.key);
  if (i != -1) keys.splice(i, 1);
}

const isKeyDown = (key) => {
  if (keys.find(k => k === key)) return true;
  else return false;
}

document.addEventListener("keydown", addKey);
document.addEventListener("keyup", removeKey);
