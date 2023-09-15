// Write an object with getter/setter field name.
'use strict'

const obj = {}
Object.defineProperty(obj, 'name', {
  set(str) {
    this._name = str.split(', ').map(item => [item, item.length]);
  },
  get() {
    return this._name
  }
})
