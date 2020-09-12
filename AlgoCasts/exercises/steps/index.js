// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// we are making multiple console log statement calls. 

function steps(n) {
  for (let row = 0; row < n; row++) {   //iterate thru rows
    let stair = '';
    for (let column = 0; column < n; column++){ //iterate thru columns
      if (column <= row) { //if current column less than or equal to row
        stair += '#'; //add #
      } else {
        stair += ' ';  //add space
      }
    }
    console.log(stair) //after we have processed entire row, make sure to console.log the row. (ie, the full stair string.)
  }


}

module.exports = steps;
