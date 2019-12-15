/**
 * Created by Taqi Raza_ on 2019-12-11.
 */
class Practice2 {
  public static function main(args : String[]) {
    var num : int = 43  //any number not divisible by 2
    // if it is even value of modulus will be 0

    if (num % 2 != 0) {
      print(num + " is odd number")
    }

    //Divide number by 2, if the result have any decimal value then it is odd number
    var val : Double = num
    var res = val / 2
    var resStr : String = res.toString()
    res.toString()
    print(resStr) //43/2 = 25.5 , 2 =0 , 5 =1, . = 2, 3=5
    print(resStr.indexOf("."))  //indexOf is opposite of CharAt
    var dotIndex : int = resStr.indexOf(".") //Give me value index of .
    dotIndex += 1   //Added plus 1 on the value index of .
    var decimalValue = resStr.charAt(dotIndex) //After adding plus 1 on index of . it gives the value of 5 because 25.5
    print("Decimal value is " + decimalValue)
    if (decimalValue != 0){
      print(num+ " is an Odd Number")
    }


    // if (val/2 typeis Double){
    //  print

    // }

  }
}
