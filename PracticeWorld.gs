/**
 * Created by Taqi Raza_ on 2019-12-09.
 * GuideWire Training
 */
class PracticeWorld {

  public static function main(args : String[]) {
    var GenM : String = "Male"
    var GenF : String = "Female"
    var AgeGenF1 : int = 22
    var AgeGenF2 : int = 20
    var AgeGenF3 : int = 24
    var AgeGenF4 : int = 16
    var AgeGenM1 : int = 25
    var under18 : String = GenM.toString()  //toString gets the string from the varialble defined
    var NameF : String = "Robertia "
    var NameM: String = "Alex"
    var captain : String = "is allowed to go to casino"

    if (NameM == "Alex" && AgeGenF1 == 18) {
    print (NameM.concat(" is not allowed to buy tobacco or Alcohol"))
    }
    else if (AgeGenF1 >= 20 && AgeGenF1 <= 25){
    print (NameM.concat( "is allowed to buy alcohol"))
    }

      else if (AgeGenM1 > 18){
    print (NameM.concat( "is  allowed to buy alcohol or tobacco"))
    }
    else { print (NameM.concat( " is not allowed to buy alchol or tobacco"))}



    if (GenM != "Female") {
    print (under18)}

    if (AgeGenF2<=25)
      print(under18.getBytes())

   // if (AgeGenF3 != 25){
    //  print (captain.replace(NameF , NameM))}

    if (AgeGenF3 > 19) {
      print (NameF.length())
    }

    if (NameM != "Robert"){
      print (NameM.toUpperCase())    }


    //Concat allows to put additional string
    // character after fetching the string from varialble defined above
    if (AgeGenF1 >= 18 || AgeGenF1 < 25)
    {
      print (GenF.concat(",".concat(NameF)).concat(" is above 18 years old"))

    }
    //Wont execute because age is not under 25
    if (NameM == "Alex  " && AgeGenM1 <= 25 ) {
      print(captain)}


    // works because alex is 25 and is allowed to go to casino
    if (NameM == "Alex" && AgeGenM1 == 25) {print("Alex".concat(captain))}

    if (AgeGenF2 > 18 || AgeGenF3 < 25)
    print ("you're not allowed to go to casino")


    GenM.length()
    print(GenM.length()) // Prints the length of letters in integers , 4



  }
}

