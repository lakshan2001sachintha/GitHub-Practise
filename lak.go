package main
import ("fmt")

func myFunc(num1 int,num2 int) int{
    sum := num1 + num2
	return sum
	// need to conflict
}

func main(){
	fmt.Println("lakshan");
	result := myFunc(12,23)
	fmt.Println(result)
	// lakshan
}
}
