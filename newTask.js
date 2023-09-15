/*
Build a custom extend function that allows you to extend an object with additional properties and
control their attributes using property descriptors.
*/
'use strict'

function extend(mainObj, addObj) {
  for (let key in addObj)
    Object.defineProperty(mainObj, key, addObj[key])
}
const myObj = {
  prop1: 'value1'
}
extend(myObj, {
  prop2: { value: "value2", writable: false,enumerable:true },
  prop3: {
    get() {
      return "computed";
    },
  },
});
console.log(myObj.prop3);
myObj.prop2='lie'
console.log(myObj.prop2);