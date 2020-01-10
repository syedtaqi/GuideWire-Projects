/**
 * Created by Taqi Raza_ on 2020-01-10.
 */
class Calculator {
/*
1. simple function with print stmt
 2. function that accepts a parameter and prints
 3. function that accepts multiple parameter and prints
 4. two functions with same name (is only allaowed if # of parameters/ type of parameter are different)
 5. function that can return a value

 a Class called Calculator
 main{
 int a = 4
 int b = 5
 var sum =  add (a , b)
 print(sum)
 var sub = sub(a, b)
 print(sub)
 }
 add(2 param) adds 2 numbers given as input, does not return and prints the sum
 sub(2 parameters) prints the sum, but doesn't return
 divide(2 params)  return & prints the value directly
 multiply(2 params) returns and prints the value directly
 multiply(3 params) returns


 */

  public static function  main (args:String[]){
    ab("")

    var c = 4
    var d = 2
    var e = 2
    print ("a = 4, b = 2, c = 2")
    addF(c, d)
    subF(c, d)

    var div = divideF(c,d)
    print("Divide: (a/b) = " + div)

    var mul =  multiplyF(c, d, e)
    print("Multiply 3 variables: (a*b)*c = " +mul)

    var mul2 = multiplyF(c,d)
    print("Multiply 2 variables: (a*b) = " + mul2)

    endF()

}

  public static function ab (calc : String){
    print("****Calculator*****")
  }
  public static function addF ( a : int , b : int){
    var sum = a + b
    print("Add: (a+b) = "+sum)
  }

  public static function subF(a : int, b: int){
    var sum = a-b
    print("Subtract: (a-b) ="+sum)
  }

  public static function divideF(a : int, b : int) : Integer{
    var sum = a/b
    return sum
  }

  public static function multiplyF(a: int, b:int, c:int) : Integer{
    var sum = (a*b)*c
    return sum
  }

  public static function multiplyF(a: int, b:int): Integer{
    var sum = (a*b)
    return sum
  }

  public static function endF(){
    print("**End of Program**")
  }
}