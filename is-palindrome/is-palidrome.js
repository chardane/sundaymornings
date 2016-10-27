/*
 * Check if a word or string is a palindrome.
 */

/**
 * Deflate a phrase into a single string.
 */
var deflateString = function(input) {
  var output;
  //var space = /\s*/;
  // Strip non-alpha characters & merge into one string.
  output = input.replace(/[^\w]|_/g, "");
  // Convert the whole thing to lower case.
  return output.toLowerCase();
}

/**
 * Test the string.
 */
var isReversible = function (input) {
  var inverse = input.split('').reverse().join('');
  return input == inverse;
}

/**
 * Orchestrate the whole deal.
 */
var isPalindrome = function(input) {
  var string = deflateString(input);

  if (isReversible(string)) {
    console.log ("Congratulations! \"" + input + "\"  Is a palindrome!");
  }
  else {
    console.log("Aw shucks! \"" + input + "\" Isn't a palindrome.");
  }
}


// Successful test.
isPalindrome("Madam I'm Adam");

// Failed test.
isPalindrome("dog");

// Crazy test.
isPalindrome("Go hang a salami, Bob.  I'm a lasagna hog.");

// Another crazy test.
isPalindrome("Ah, Satan sees Natasha");

// Yet another crazy test.
isPalindrome("Oozy rat in a sanitary zoo");
