

def count_and_back(num):
    for i in range(1, num + 1):
        print(i)
    for i in range(num - 1, 0, -1):
        print(i)

def main():
    count_and_back(100)

if __name__ == '__main__':
    main()
