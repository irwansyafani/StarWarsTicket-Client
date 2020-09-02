// run command : node question3.js

function recursive(str) {
  // create everything as a string
  str = `${str}`
  return str ? recursive(str.substring(1)) + str[0] : str
}

console.log(recursive("hello"))
console.log(recursive("a"))