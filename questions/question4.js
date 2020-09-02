// run command : node question4.js

(function patterns(num = 5) {
  let arr = [];
  let arr2 = []
  let result = []
  for(let i = 0; i < (num + (num - 1)); i++) arr.push(' ')
  for(let i = 1; i <= num; i++) {
    arr[i - 1] = i
    arr[arr.length - i] = i
    arr2.push(arr.join(''))
  }
  for(let i = arr2.length - 1; i >= 0; i--) {
    if (i == arr2.length - 1) {
      result.push(arr2[i])
    } else {
      result.push(arr2[i])
      result.unshift(arr2[i])
    }
  }
  console.log(result.join('\n'))
})(/* you can also input any number if you want here */)