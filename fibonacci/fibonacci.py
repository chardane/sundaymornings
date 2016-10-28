def fibonacci(number):
    """Return the Fibonacci sequence up to the nth element
    >>> fibonacci(1)
    [1]
    >>> fibonacci(2)
    [1, 1]
    >>> fibonacci(5)
    [1, 1, 2, 3, 5]
    """

    result = []
    current, nxt = 0, 1

    while True:
        current, nxt = nxt, nxt + current
        result.append(current)
        if len(result) == number:
            return result


if __name__ == "__main__":
    import doctest
    doctest.testmod()
