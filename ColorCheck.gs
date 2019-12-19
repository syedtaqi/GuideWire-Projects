/**
 * Created by cool_ on 2019-12-17.
 */


uses java.util.*

class ColorCheck {
  public static function main(args : String[]) {
    //Store stuff in array
    // Print only with "x" string in it
    // print only string value that has longer then 3


    var ArrColors : String[] = {"abcd ", "efgs ", "Abc","ANNNN"}
    var col = ArrColors.length
      //for (c in ArrColors) {
       // var b : boolean = true
       // if (b == true){
        //print(c.contains("c"))   //Prints true/false based on the letter found
        //print(c.intern())         //Prints entire array
        //  print(c.split("c"))     //Takes out the letter from the array strings
         // print(c.toCharArray())    //Seperates each string alphabet with a comma
         // print(c.countMatches("Abc"))  // Prints Error
        //}
        //else {
         // print("error")
       // }
     // }

    for (count in ArrColors){

      if (col>3)
      {
        print("LEngth greater than 3: T/F "+count.contains("A"))
      }

    }

    for (count in ArrColors){
     // if(col>3){
     //   print(count.length())
     // }
      if(count.length()>3){
        print(count)
      }
        ///Prints string that contains A
      if(count.contains("A")){
        print(count)
      }
    }
  }

}


