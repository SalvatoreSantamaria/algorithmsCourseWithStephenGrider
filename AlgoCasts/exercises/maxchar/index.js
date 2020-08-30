// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



//covert str to object
function maxChar(str) {
  let obj = {};
  let count = 0
  let maxChar = ''
  for (let i of str) {
    if (!obj[i]) {
      obj[i] = 1
    } else {
      obj[i] ++
    }
  }

  console.log(obj)
  for (let j in obj) {
    if ((obj[j]) > count) {
      count = obj[j]
      maxChar = j
    }
  }
  console.log(maxChar)
  return count
}

maxChar('hello there')





// function maxChar(str) {
//   const charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let i of str) { //loop thru str
//   if (charMap[i]) { //if letter is found in object, ie, charMap.a is found
//     charMap[i]++; // increment the value of that key, ie charMap.a : 2
//   } else {
//     charMap[i] = 1; //otherwise, if letter is not found in object, create it and set it to 1
//     }
//   }
//   console.log(charMap)

//   for (let i in charMap) { // 
//     if (charMap[i] > max) { // charMap[i] is value, or 1 in a:1
//       max = charMap[i]; //ie max = 1 
//       maxChar = i // i is the key in key value, ie a in a:1
//     }
//   }
//   console.log(maxChar);
//   return maxChar;
// }

module.exports = maxChar;
