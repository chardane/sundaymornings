def get_number_from_string(string):
    """ Return digit characters and parse the remaining to number
    >>> get_number_from_string('1')
    1
    """
    return int(string)


if __name__ == "__main__":
    import doctest
    doctest.testmod()
