var _ = require('underscore')

//implement a function that returns true if a is an anagram of b
//
//Anagram:
//rearranging the letters of a word or phrase to produce a new
//word or phrase, using all the original letters exactly once

function clean(piece) {
  piece = piece.toLowerCase();
  piece = piece.replace(/[^\w]/gi, '');

  return piece;
}

function anagram(a, b) {
  //an anagram just means that all the letters of a is a proper subset of b
  //and each instance of a letter cannot be repeated
  if ((a.length) && (b.length)) {
    a = clean(a);
    a = _.sortBy(a);

    b = clean(b);
    b = _.sortBy(b); //best case O(n log n)

    if (a.length == b.length) {
      //now need to check that each element matches
      for(var i=0; i<a.length; i++) { // O(n)
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
  }
  // so really this is just O(n log n), but for really really big strings
  // this would proabbly not work well
  // space is just O(a + b)
  return false;
}

console.log("ANAGRAM:\n\n");

console.log("this, hits");
console.log("true");
console.log(anagram("this", "hits"));

console.log("\nanagram, nag a ram");
console.log("true");
console.log(anagram("anagram", "nag a ram"));

console.log("\nClint Eastwood, Old West Action");
console.log("true");
console.log(anagram("Clint Eastwood", "Old West Action"));

console.log("\nSoftware, Swear Often");
console.log("false");
console.log(anagram("Software", "Swear Often"));

console.log("\naaa, abc");
console.log("false");
console.log(anagram("aaa", "abc"));

console.log("\nabc, aaa");
console.log("false");
console.log(anagram("abc", "aaa"));

console.log("\nwoo, ow");
console.log("false");
console.log(anagram("woo", "ow"));

console.log("\nwoo, owoo");
console.log("false");
console.log(anagram("woo", "owoo"));
