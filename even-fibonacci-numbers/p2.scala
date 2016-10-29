def isEven = (n: Long) => n % 2 == 0

def fibonacci(limit: Long = 100l): Set[Long] = {
  def fib(first: Long, second: Long, numbers: Set[Long]): Set[Long] =
    if (first + second > limit) numbers + second
    else fib(second, first + second, numbers ++ Set(first, second))

  fib(1, 2, Set.empty[Long])
}

println(s"sum of the even-valued fibonacci numbers = ${fibonacci(limit = 4000000l) filter isEven reduce (_ + _)}")

