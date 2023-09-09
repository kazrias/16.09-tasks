/*
Create a deep clone of an object while preserving property descriptors. Ensure that the cloned object
has the same property attributes as the original.
*/

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  let clone = Object.create(Object.getPrototypeOf(obj));
  let descriptorsOfObj = Object.getOwnPropertyDescriptors(obj);
  for (let prop in descriptorsOfObj) {
    descriptorsOfObj[prop].value = deepClone(descriptorsOfObj[prop].value);
  }
  Object.defineProperties(clone, descriptorsOfObj);
  return clone;
}

let user = {
  name: 'Tyom',
  friends: {
    first: {
      name: 'Leon',
    },
    second: {
      name: 'Sam',
    }
  }
}
let secondUser = deepClone(user)
console.log(secondUser===user);