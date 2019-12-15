/**
 * Created by Taqi Raza_ on 2019-12-13.
 */

uses java.util.*
uses java.util.Scanner

class SwitchCases {
  public static function main(args : String[]){
    System.out.print("Enter #Day between 0 to 7: ")

    var scan = new Scanner(System.in)

    var Day = scan.nextInt()
  //Switch case is used for defined values such as 1. Month, Days, Gender,


      switch (Day) {
        case 1:
          print("Monday")
          break
        case 2:
          print("Tuesday")
          break
        case 3:
          print("Wednesday")
          break
        case 4:
          print("Thursday")
          break
        case 5:
          print("Friday")
          break
        case 6:
          print("Saturday")
          break
        case 7:
          print("Sunday")
          break
        default:
          print("Day is invalid")
          break

      }
    System.out.println("....................................")
    System.out.println("Enter Gender, M/ F/ Any: ")
    var Gender = scan.next()

    System.out.println("Enter Age: ")
    var Age = scan.nextInt()

    switch(Gender){
      case "M":
        print("Male is " + Age + " years old")
        break
      case "F":
        print("Female is "+ Age + " years old")
        break
      default:
        print("Supports LGBTQ & "+ Age + " years old" )
        break

    }




  }
}