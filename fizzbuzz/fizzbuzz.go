package main

import "fmt"


func fizzbuzz(passed_input []int) {

     for i:=0; i<len(passed_input); i++{
	 if passed_input[i] % 3 == 0 || passed_input[i] % 5 ==0 {
	    if passed_input[i] % 3 == 0 {
	       fmt.Print("fizz")
	    }
	    if passed_input[i] % 5 == 0 {
	       fmt.Print("buzz")
	    }
	    fmt.Println()
	 } else {
	      fmt.Println(passed_input[i])
	 }
     }
}

func main() {
     // Formally create a slice and populate it with numbers 1 through 5
     input_array1 := make([]int, 5)
     for i:=0; i<len(input_array1); i++ {
     	 input_array1[i] = i+1
	 }
     fmt.Println("input 1:", input_array1)
     fizzbuzz(input_array1[0:])

     fmt.Println("----- ----- -----")

     // Define an array and pass it to fizzbuzz as a slice
     input_array2 := [6]int{3, 5, 12, 15, 30, 33}
     fmt.Println("input 2:", input_array2)
     fizzbuzz(input_array2[0:])
     
     
}