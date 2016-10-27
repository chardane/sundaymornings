import unittest

# The actual function
def anagram(a,b):
    return a.lower().split().sort() == b.lower().split().sort()


# Some tests to make sure there are no egregious mistakes
class TestStringMethods(unittest.TestCase):

    def test_basic_true(self):
        self.assertTrue(anagram('eat','tea'))

    def test_basic_false(self):
        self.assertTrue(anagram('code','sleep'))

    def test_upper(self):
        self.assertTrue(anagram('code', 'DECO'))
                        

# Automatically test
if __name__ == '__main__':
    unittest.main()
