/**
 * Created by Taqi Raza_ on 2019-12-18.
 */

uses java.util.*

class TablesofX {
  public static function main(args : String[]){

    //Table of X loop through 10 times

    print("****Table of X***")
    System.out.print("X: ")
    var valX = new Scanner(System.in)
    var Xvalue = valX.nextInt()

    print ("loop through value of Y : 10 times")

    var valY : int = 10  //loop through 10 times

    for (m in 0|..valY index i){
      print("${Xvalue} * ${i+1} = ${Xvalue*(i+1)}")
    }

  }
}
