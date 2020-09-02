// run command : node question1.js

function chiper (str, num) {
  str = str.toLowerCase().split('')
  let result = '';
  let alphabets = [
    'a', 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y',
    'z'
  ];
  str.map(el => {
    if (el === ' ') result += ' ';
    else {
      alphabets.find((a, i) => {
        if (a === el) result += alphabets[(i + num) % 26]
      })
    }
  })
  return result;
}
console.log(chiper("cipher", 2)) // ekrjgt
console.log(chiper("hello worldz", 3)) // khoor zruogc