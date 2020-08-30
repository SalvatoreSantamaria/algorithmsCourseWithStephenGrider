// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9








function reverseInt(n) {
  let str = n.toString()
  let result = ''
  for (i of str) {
    result = result + i
  }
  if (n > 0) {
  return parseInt(result)
  } else if (n < 0) {
    return parseInt(result) * -1;
  }
}
// reverseInt(15)
 module.exports = reverseInt;





























// function reverseInt(n) {

//   let reversed = n.toString().split('').reverse().join('');
  

//   if (n < 0) {
//     return parseInt(reversed) * -1;
//   } else if (n === 0) {
//     return 0;
//   }

//   else {
//     return parseInt(reversed);
//   }
// }

module.exports = reverseInt;
