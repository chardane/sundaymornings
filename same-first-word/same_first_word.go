package main

import (
       "fmt"
       s "strings"       
)


func same_first_word(a, b string) bool {

     // split up the strings
     a_split := s.Split(a, " ")
     b_split := s.Split(b, " ")

     // isolate the first word and lowercase
     a_first := s.ToLower(a_split[0])
     b_first := s.ToLower(b_split[0])
     
     return (a_first == b_first)
}


func main() {
     a := "From now on"
     b := "from here to there"
     is_same := same_first_word(a, b)
     fmt.Println("First words from strings: ", a)
     fmt.Println("and: ", b)
     fmt.Println("match?", is_same)

     c := "From now on"
     d := "To infinity and beyond"
     is_same2 := same_first_word(c, d)
     fmt.Println("First words from strings: ", c)
     fmt.Println("and: ", d)
     fmt.Println("match?", is_same2)

}