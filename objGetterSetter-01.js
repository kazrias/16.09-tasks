// Write an object with getter/setter field name.

const obj = {}
Object.defineProperty(obj, 'name', {
  set(str) {
    this._name = str.split(', ').map(item => [item, item.length]);
  },
  get() {
    return this._name
  }
})
obj.name = "Hamlet, Artavazd, Ashot";
console.log(obj.name);