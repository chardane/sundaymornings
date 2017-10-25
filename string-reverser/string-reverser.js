function stringReverser(str) {
	// Split the string into an array
	var splitted = str.split(""); // empty delimiter so each character gets broken out

	// Reverse the array - in-place
	splitted.reverse();

	// Join it back again
	var ret = splitted.join(""); // empty delimiter, so there's nothing extra

	return ret;
}

console.log(stringReverser('hello world'));