### Same Word First

Check two strings to see if they start with the same word.  But here's the rub:  you can't use split and you can't use temporary variables.

Implement a function with the following signature 
`def startsWithSameWord(original: String, compare: String): Boolean`

Such that given the following two strings, the result will equal true:

    val original = "Hello there"
    val compare = "Hello World"
    val result = startsWithSameWord(original, compare)


Such that given the following two strings, the result will equal false:

    val original = "Hello there"
    val compare = "Hellooooo World"
    val result = startsWithSameWord(original, compare)

Such that given the following two strings, the result will equal false:


    val original = "Hello there you"
    val compare = "Yay World hooray"
    val result = startsWithSameWord(original, compare)
