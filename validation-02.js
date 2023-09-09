/*
Create a function that takes an object and a set of validation rules as property descriptors. Validate
each property according to the rules and return a new object with validated properties.
*/
'use strict'
function validateObj(obj, validationRules) {
  const resObj = {};
  for (let key in obj) {
    Object.defineProperty(resObj, key, { ...validationRules[key], value: obj[key] })
  }
  return resObj
}

let user = {
  name: "Tyom",
  age: 23,
  gender: 'male'
}
let rules = {
  name: {
    writable: false,
  },
  age: {
    writable: false,
    enumerable: tru,
  },
  gender: {
    writable: true,
  }
}
let newUser=validateObj(user,rules)
console.log(newUser);