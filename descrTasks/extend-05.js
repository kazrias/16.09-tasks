/*
Build a custom extend function that allows you to extend an object with additional properties and
control their attributes using property descriptors.
*/
'use strict'

function extend(mainObj, addObj) {
  for (let key in addObj)
    Object.defineProperty(mainObj, key, addObj[key])
}
