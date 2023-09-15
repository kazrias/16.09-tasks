/*
Create a deep clone of an object while preserving property descriptors. Ensure that the cloned object
has the same property attributes as the original.
*/
'use strict'

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