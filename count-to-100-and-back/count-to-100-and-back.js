/*
  Create a loop that counts from 1 to 100 and back to 1.

*/


/*
 * Increment the counter by one & return it.
 */
var incrementCounter = function(counter) {
  return counter += 1;
}

/*
 * Decrement the counter by one & return it.
 */
var decrementCounter = function(counter) {
  return counter -= 1;
}

var testCountToOneHundredAndBack = function() {
  var counter = 1;
  console.log("Starting!");
  console.log(counter);
  while (counter < 100) {
    counter = incrementCounter(counter);
    console.log(counter);
  }
  while (counter > 1) {
    counter = decrementCounter(counter);
    console.log(counter);
  }
}

var testCountToNAndBack = function(n) {
  var counter = 1;
  console.log("Going to "+n+" and back!");
  console.log(counter);
  while (counter < n) {
    counter = incrementCounter(counter);
    console.log(counter);
  }
  while (counter > 1) {
    counter = decrementCounter(counter);
    console.log(counter);
  }

}

testCountToOneHundredAndBack();
testCountToNAndBack(10);
testCountToNAndBack(5);
testCountToNAndBack(3);
