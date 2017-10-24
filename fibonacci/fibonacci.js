/**
 * Returns an array of N Fibonacci numbers.
 *
 * USAGE
 * node fibonacci.js 2
 * [1, 1]
 *
 * node fibonacci.js 10
 * [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 */

var sequence = [];

function getFib(n) {
  var a = 1, b = 0, temp;
  // N >= 1 & not 0 to avoid off-by-one.
  while (n >= 1){
    temp = a;
    a = a + b;
    b = temp;
    // Add b, which is the current Fibonacci value to the array.
    sequence.push(b);
    n--;
  }
  return sequence;
}

// Get the argument from the CLI.
var num = process.argv[2];
console.log(getFib(num));