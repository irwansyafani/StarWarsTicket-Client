// run command : node question2.js

function createPalindrome(...str) {
  let reverse = str.slice(0, str.length - 1).reverse().join('')
  console.log(str.join('') + reverse)
}

createPalindrome('p', 'h', 'o', 'b', 'i', 'a') // input satu satu