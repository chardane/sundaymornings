/*
  Create a loop that counts from 1 to 100 and back to 1.

*/

var incrementCounter = function(counter) {
  return counter += 1;
}

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

testCountToOneHundredAndBack();
