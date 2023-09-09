/*
Implement an Immutable class that creates objects with immutable properties. Any attempt to
modify a property should result in an error.
*/
'use strict'

function Immutable(valuesObj) {
  Object.assign(this, valuesObj)
  Object.freeze(this)
}
const immutableUser = new Immutable({ name: 'Tyom', age: 23 })