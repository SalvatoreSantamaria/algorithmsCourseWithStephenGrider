// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // make a midpoint
  let midpoint = Math.floor((2 * n - 1) / 2)
  // iterate by row
  for (let row = 0; row < n; row++) {
    let level = ''
    // iterate through each row
    for (let column = 0; column < 2 * n - 1; column++) {
      // check to see if iteration is between these bounds
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
      } else {
        level += ' '
      }
    }
  console.log(level)
  }
}

module.exports = pyramid;
