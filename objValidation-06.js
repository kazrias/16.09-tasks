/*
Create a function that validates an object's properties based on a schema using property descriptors.
It should enforce types, required properties, and custom validation functions.
*/

'use strict'

function validateObj(obj, schema) {
  for (let key in schema) {
    if (!obj.hasOwnProperty(key))
      return 'No such property in object'
    if (typeof obj[key] !== typeof schema[key].value)
      return 'Wrong type of value'
    if (!schema[key].validate(obj[key]))
      return 'Failed to validate object`s property'

    const objDescriptor = Object.getOwnPropertyDescriptor(obj, key);
    if (schema[key].writable !== objDescriptor.writable)
      return 'Property shouldn`t be "read only"'
  }
  return 'Validation passed'
}

const schema = {
  name: {
    value: "",
    writable: true,
    validate: (value) => typeof value === "string",
  },
  age: {
    value: 0,
    writable: true,
    validate: (value) => typeof value === "number" && value >= 18,
  },
}
