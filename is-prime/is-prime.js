/*
 * Check for prime numbers
 */
 
/**
 * Return true is input is a prime number
 * This is based on trial division
 * (simplest primality test algorithm)
 */
function primeChecker(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true
}

/**
 * Main function
 */
function isPrime(input) {
    let num = parseInt(input);
    let result = primeChecker(num);
    console.log("Number " + num + " is" + (result? "" : " not") + " a prime");
}

// Successful test
isPrime(1298111);

// Failed test
isPrime(59919122);

// Random tests
for(let i = 0; i<10; i++) {
	isPrime(Math.floor(Math.random() * Math.pow(10, Math.floor(Math.random() * 10))));
}