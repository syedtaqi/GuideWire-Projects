/**
 * Created by cool_ on 2019-12-23.
 */

uses java.lang.*
class Lambda {


  public static function main(args : String[]){
    var lambdaNames = {"Gosu" , " Abc", "Defgh", "aaabbbc"}
    var check = lambdaNames.where(\elt -> elt.length()>4)
    print (check)


   // lambdaNames.where(\elt ->
   // lambdaNames.hasMatch(\elt1 ->
   // lambdaNames.firstWhere(\elt ->
   // lambdaNames.firstWhere(\elt -> ))

    var check2 = {}
    for(elt in lambdaNames) {

      if (elt.length() > 3) {
        check2.add(elt)
       print(check2)
      }

    }
  }

}
