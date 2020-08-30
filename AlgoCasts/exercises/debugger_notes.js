// run tests with jest filename/test.js --watch

function reverse(str) {
  debugger;
  return str.split('').reverse().join('')
}

//have to call function before exporting
reverse('qwert')
//end test with ctrl c
// cd into file cd exercises/reversestring for the reversestring file
// run: node inspect index.js
// after file runs write c or cont (short for continue)
// then will hit debugger statement
// then need to enter repl. type: repl
// explore variables, or even type in code to see what the code does

module.exports = reverse;