val allMultiplesOfThreeOrFive = for {
  n <- 1 until 1000 if n % 3 == 0 | n % 5 == 0
} yield n
val sum = allMultiplesOfThreeOrFive.sum

println(s"sum of all the multiples of 3 or 5 below 1000 is = ${sum}")
