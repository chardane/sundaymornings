def get_number_from_string(string):
    """ Return digit characters and parse the remaining to number
    >>> get_number_from_string('1')
    1
    >>> get_number_from_string('This is number: 9')
    9
    """

    result = ''
    for each in string:
        if each.isdigit():
            result += each

    return int(result)


if __name__ == "__main__":
    import doctest
    doctest.testmod()
