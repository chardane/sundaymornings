"use strict";
// Code below is executed in special strict mode.

/**
*  A function to swap two numbers without using a temporary variable and alert the result to the user.
*  @param x: integer
*  @param y: integer
*/
function swap(x, y) {
	alert("Before swapping : x <- " + x + " y <- " + y);
	// Swapping logic
	x = x + y;
	y = x - y;
	x = x - y;
        alert("After swapping : x <- " + x + " y <- " + y);
}

// Test functions
swap(10, 5);

swap(4, 5);

swap(5, 0);
