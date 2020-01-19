/**
 * Created by cool_ on 2019-12-25.
 */
class Blocks {
  public static function main(args : String[]){

    /**
     * print("****Table of X***")
     System.out.print("X: ")
     var valX = new Scanner(System.in)
     var Xvalue = valX.nextInt()

     print ("loop through value of Y : 10 times")

     var valY : int = 10  //loop through 10 times

     for (m in 0|..valY index i){
     print("${Xvalue} * ${i+1} = ${Xvalue*(i+1)}")



     var arrNames =  {"james", "Bond", "Sean", "wil", "Al"}
     for(a in arrNames){
     if(a.length() > 3){
     print(a)



     */
    var arrNams = {"James","sxx","Ali","bcce", "Anna"}
    var check = arrNams.where(\a -> a.length()>4 )
    print(check)


    var check2 = arrNams.firstWhere(\b -> b.endsWith("a"))
    print(check2)

    var palin = {"MALAYAM", "ANNA", "Aza"}
    var check3 = palin.firstWhere(\elt -> elt.contains("M"))
    var check4 = palin.where(\elt1 -> elt1.endsWith("M") )
    var check5 = palin.firstWhere(\elt2 -> elt2.contains("A") )
    var check6 = palin.where(\elt -> elt.endsWith("A"))
    if(check3 == palin.firstWhere(\elt -> elt.contains("M"))){

            print (check4)

    }

    if (check6==palin.where(\elt3 -> elt3.endsWith("A") )){
      print(check5)
    }



      //public private protected
      // function
      // function name()
      //: return type


    }
  public static function printHello(){
    print("Hello World !!")
  }

  public static function printCustom(abc : String){
    print("Hello "+ abc +" !!")
  }

  public static function printAgainTwo(name : String, age : int){
    print(name +"is "+ age +  " years old.")
  }

  //write a function that will accept a number and print if the numner is even or odd
  //write a function that will accept a number and print if the number is prime or not
  //convert any possible example that was done into a function

  }

