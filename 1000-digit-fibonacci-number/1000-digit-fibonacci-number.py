sequence = [1,1]

def fib(n):
	if n == 1 or n == 2:
		return sequence[n-1]
	sequence.append(sequence[n-3] + sequence[n-2])
	return sequence[n-1]

i = 1
found = False
while not found:
	term = str(fib(i))
	if len(term) == 1000:
		found = True
		print i
	i += 1
