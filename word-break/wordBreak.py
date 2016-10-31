with open("/usr/share/dict/words") as words_file:
    words = set(words_file.read().split())

for c in "abcdefghijklmnopqrstuvwxyz":
    if c in words:
        words.remove(c)

cache = {}

def f(word_string):
    if word_string in words:
        return word_string
    else:
        for i in range(1, len(word_string) + 1):
            prefix = word_string[0:i]
            if prefix in words:
                suffix = word_string[i:]
                if suffix in cache:
                    result = cache[suffix]
                else:
                    result = f(suffix)
                    cache[suffix] = result
                if result is not None:
                    return prefix +  " " + result
        return None

if __name__ == '__main__':
    print f("applepieapple")
    print cache
