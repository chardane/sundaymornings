/**
*  Implement a function that takes in an array of integers and returns:
*  "fizz" for multiples of 3,
*  "buzz" for multiples of 5,
*  "fizzbuzz" for multiples of 15,
*  the number itself for the rest.
*/

//ONE-LINE SOLUTION:
//  array.forEach(i=>console.log(((i%3?'':'fizz')+(i%5?'':'buzz'))||i))

//FULL SOLUTION FOLLOWS:

/**
*  A function to check an individual number and console.log our response.
*  @param int: integer
*  Function without comments or extra whitespace:
*
*/
function checkNumber(int) {
  // Since this is JavaScript, we console.log our answers.
  console.log(
    // First, we check to see if the int is a multiple of three or five (or both)
    // We're using some ternaries and reliance on JavaScript's truthy/falsy values
    (
      // If int % 3 returns a truthy value (i.e. not zero),
      // this ternary will return the empty string, which is falsy.
      // Otherwise, it returns the string 'fizz'
      ( int % 3 ? '' : 'fizz')
      +
      // We do the same thing for multiples of 5, but with 'buzz',
      // and add the returned values together.
      ( int % 5 ? '' : 'buzz')
    )
    // At this point, we have an empty string ('' + '') if the number
    // isn't a multiple of 3, 5, or 15. The empty string, which is falsy,
    // will then fail the || operator and we will console log the int itself.
    // If we've returned a non-empty string, we have a truthy value, and
    // the code after the || operator will not run.
    || int
  );
}


/**
*  This function simple takes in an array of integers
*  and runs checkNumber on each one with the forEach iterator
*/
function fizzbuzz(arr) {
  arr.forEach(checkNumber);
}

/**
*  This function creates an array of integers, from 1 up to the max param
*/
function createTestArray(max) {
  // First, we make sure there is a parameter and that it is greater than 0;
  if (!max || max < 1) {
    // If it isn't, we return a single-element array, with 1 as the sole element.
    return [1];
  }
  // Otherwise, we instantiate an empty array.
  var testArray = [];
  // We use a simple for loop to iterate i from 1 to the max param, inclusive.
  for (var i = 1; i <= max; i++) {
    // We push the value of i into the testArray.
    testArray.push(i);
  }
  // Finally we return the testArray.
  return testArray;
}

//Test it out!
fizzbuzz(createTestArray(50));
