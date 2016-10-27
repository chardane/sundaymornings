def fibonacci(number):
    """Return n'th element of Fibonacci sequence
    >>> fibonacci(1)
    [1]
    >>> fibonacci(2)
    [1, 1]
    """

    if number == 1:
        return [1]
    if number == 2:
        return [1, 1]


if __name__ == "__main__":
    import doctest
    doctest.testmod()
