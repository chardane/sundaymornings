def get_number_from_string(string):
    """ Return digit characters and parse the remaining to number
    >>> get_number_from_string('1')
    1
    >>> get_number_from_string('This is number: 9')
    9
    >>> get_number_from_string('$100 000 000')
    100000000
    >>> get_number_from_string('hell5o wor6ld')
    56
    """

    result = int(''.join(filter(lambda x: x.isdigit(), string)))

    return result


if __name__ == "__main__":
    import doctest
    doctest.testmod()
