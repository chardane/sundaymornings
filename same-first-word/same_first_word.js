/*

two strings
check if they start with the same word
can't use split, can't use temps

"Hello there"
"Hello World"

startsWithSameWord() = true

"Hello there"
"Hellooooo World"

startsWithSameWord() = false

"Hello there you"
"Yay World hooray"

startsWithSameWord() = false
*/

var startsWithSameWord = function(original, compare) {
  //todo figure out if phrase length needs to be checked
  var shorter_phrase = Math.min(original.length, compare.length);

  for(var i=0; i < shorter_phrase; i++) {
    //console.log("[" + i + "] o: " + original[i] + " c: " + compare[i] + " - " + (original[i] === " "));
    if (original[i] === " " || compare[i] === " ")  {
      if (original[i] === compare[i]) {
        return true;
      }
      return false;
    }
    if (original[i] !== compare[i]) {
      return false;
    }
  }
  return true;
};


var test_StartsWithSameWord = function(original, compare, expect) {
  return startsWithSameWord(original, compare) === expect;
};


var original = "Hello World";
var compare = "Hello There";
var expect  = true;
console.log("Initial test");
console.log(test_StartsWithSameWord(original, compare, expect));

var original = "Hello World";
var compare = "Hellooooo There";
var expect  = false;
console.log("similar first word test");
console.log(test_StartsWithSameWord(original, compare, expect));


var original = "Hello World";
var compare = "Yay There";
var expect  = false;
console.log("completely different first word test");
console.log(test_StartsWithSameWord(original, compare, expect));


var original = " Hello World";
var compare = " Hello There";
var expect  = true;
console.log("space in the beginning test");
console.log(test_StartsWithSameWord(original, compare, expect));


var original = "Hello";
var compare = "Hello There";
var expect  = true;
console.log("Shorter string test");
console.log(test_StartsWithSameWord(original, compare, expect));
