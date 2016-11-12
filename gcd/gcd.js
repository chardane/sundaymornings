//Calculating the gcd of two numbers using Euclids algorithm

//Function to calculate gcd of two integers
var gcd=function(a,b){

	//If a=0 gcd of the rwo numbers is b
	if(!a){
		return b;
	}

	//If b=0 gcd of the two numbers is a
	else if(!b){
		return a;
	}

	else{
		//Gcd of (a,b) is same as (b,a%b)
		if(b>a){
			gcd(a,b%a);
		}
		
		return gcd(b,a%b);
	}
}

//Function to check negatve numbers and pass onto gcd function
var checknegative=function(a,b){

	//Gcd of (a,b)=(|a|,|b|)
	//So if there is any negative integer convert it into postive

	if(a<0){
		a=a*(-1);
	}

	if(b<0){
		b=b*(-1);
	}
	return gcd(a,b);
}

console.log("Gcd of 182 and 208");
console.log(checknegative(182,208)); 

console.log("Gcd of -8 and 16");
console.log(checknegative(-8,16));  
