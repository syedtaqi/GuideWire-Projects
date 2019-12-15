/**
 * Created by Taqi Raza_ on 2019-12-13.
 */

uses java.util.*
uses java.util.Scanner

class GradeChecker {
  public static function main(args : String[]){
    System.out.print("Enter Grades: ")
    var scan = new Scanner(System.in)
    //If grade is +90, then print A
    // If grade is 80 to 90, print B
    // If grade is 70 to 80, print C
    // if grade is below 70. print F or Fail

    var GradeCheck = scan.nextInt()

    //If (condition1) else if (condition2) else if (condition3) else (condition 4)
    //If condition1 is false, go to condition2, if condition 2 is false go to condition3, if condition3 is false
    //go to condition4
    if(GradeCheck < 70)
    {print (GradeCheck + " is Fail or F")}
    else if (GradeCheck >= 70 && GradeCheck <= 79)
    {print(GradeCheck + " achieved grade C")}
    else if (GradeCheck >= 80 && GradeCheck <= 89){
      print(GradeCheck + " achieved grade B")
    }
    else if (GradeCheck >=90 && GradeCheck <= 100){
      print(GradeCheck + " achieved grade A")
    }else{
      print("Grade submitted is invalid")
    }

    print("..............................")
    //...................................



    //prints range from 100 to 90, and identifies the grades for each index
    for (i in 100..90){
      print(i+ " is grade A")
    }
    print("........................")
    for (i in 89..80){
      print(i+ " is grade B")
    }
    print("........................")
    for (i in 79..70){
      print(i+ " is grade C")
    }
    print("........................")
    for (i in 69..0){
      print(i+" is F or Fail")
    }
    print("........................")


  }
}