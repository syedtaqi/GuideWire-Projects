/**
 * Created by Taqi Raza_ on 2020-01-06.
 */
class Something {

  public var name : String
  public var age : Integer
  public static function main(args:String[]) {
//    myFunction()
//    addWords("James")
    var fName = ""
//    getFullName("James", "Bond")
    fName = returnFullName("Brad", "Pitt")
     print(fName)


  }
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
 add(2 param) adds 2 numbers given as input and returns the sum
 sub(2 parameters) returns
 divide(2 params) does not return but prints the value directly
 multiply(2 params) returns

 add(3 param) adds 2 numbers given as input and returns the sum
 sub(3 parameters) returns
 divide(3 params) does not return but prints the value directly
 multiply(3 params) returns


 */
  public static function getFullName(firstName : String, lastName : String){
    var fullName = firstName + " "+lastName
    print(fullName)
  }

  public static function returnFullName(fName : String, lName : String) : String {
    var fullName = fName + " "+ lName

    return fullName
  }

  public static function myFunction(){
    print("My own function")
  }
//method overloading
  public static function addWords(firstWord : String){
    print(firstWord)
  }

  public static function addWords(aWord : String, bWord : String){
    print(aWord + ", "+ bWord)
  }

  public static function addthree(aNum: int, bNum: int, cNum:int):Integer{
    var sum = aNum+bNum+cNum
    return sum
  }


}