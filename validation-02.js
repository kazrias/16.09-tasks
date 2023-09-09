/*
Create a function that takes an object and a set of validation rules as property descriptors. Validate
each property according to the rules and return a new object with validated properties.
*/

function validateObj(obj, validationRules) {
  const resObj = {};
  for (let key in obj) {
    Object.defineProperty(resObj, key, { ...validationRules, value: obj[key] })
  }
  return resObj
}

let user = {
  name: "Tyom",
  age: 23,
  gender: 'male'
}
console.log(validateObj(user, { writable: false, enumerable: true, configurable: false }));
