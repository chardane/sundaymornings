var sequence = [1,1];
function fib (n) {
    if (n == 1 || n == 2) {
        return sequence[n-1];       
    }
    else {
        sequence = sequence.concat(sequence[n-3] + sequence[n-2]);
        return sequence[n-1];
    }
};
function fibOneThousand(output = 'csv') {
    console.log('Starting the count to one thousand.');
    var i = 1;
    var n = 1000;
    while ( i <= n ) {
        var out = fib(i);
        if (output == 'verbose') {
            console.log("Fibonacci number " , i , " is ", out);
        }
        else if(output == 'csv') {
            console.log(i, out);
        }
        i++;
    }
    console.log("The final Fibonacci number is ", out);
    return;
}
fibOneThousand();