// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'




// function reverse(str) {
//   return str.split('').reverse().join('')
// }
// module.exports = reverse;

function reverse(str) {
  let result = '';
  for (let i of str) { //use this syntax of a for loop
    result = i + result;
  }
  debugger;
  return result;
}
reverse('qwerty')

module.exports = reverse;





































// function reverse(str) {
//   const arr = str.split('')
//   arr.reverse();
//   return arr.join('');
// }
// module.exports = reverse;

// function reverse(str) {
//   let reversed = '';
//   for (let i of str) {
//     reversed = i + reversed;
//   }
//   return reversed;
// }
// module.exports = reverse;

// total overkill
// function reverse(str) { 
//   return str.split('').reduce((reversed, character) => {
//     return character + reversed;
//    }, '');  //reduce condenses all array values into 1
// }

// module.exports = reverse;