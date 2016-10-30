/**
 * Get a number from a string or false if no numbers exist.
 */
var getNumberFromString = function(string) {
  if (typeof string == "number") {
    return string;
  }
  else {
    var num = string.replace(/\D+/g, "");
    if (num =  parseFloat(num)) {
      return num;
    }
    else {
      console.log("Silly Rabbit, there's no numbers in that string!");
      return false;
    }
  }
}

console.log("Input: 56");
console.log(getNumberFromString("56"));
console.log("Input: i5gdsasd6");
console.log(getNumberFromString("i5gdsasd6"));
console.log("Input: asdfasdf");
console.log(getNumberFromString("asdfasdf"));
