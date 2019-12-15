/**
 * Created by Taqi Raza_ on 2019-12-15.
 */

uses java.util.*

class Insurance {
  public static function main(args : String[]) {

    /** If Input ClaimXX, print Policy XX with name,sex,amount,insurance type...
     * If Input PolicyXX , print Claimxx, with name, sex, amount, insurance type...
     * */
    print("***Insurance Policy Data****")
    print("Policy# = 34576, 47865, 89543")
    System.out.print("Enter Policy#: ")
    var scan = new Scanner(System.in)
    var policy = scan.nextInt()

    switch(policy)
    {
      case 34576:
        print ("Name: Alex," + " Claim: 4345," + " Sex: M,")
        print ("Insurance Type: Auto,"+ " Amount: $15000.00")
        break
      case 47865:
        print ("Name: John," + " Claim: Doesnt Exist," + " Sex: M")
        print ("Insurance Type: Auto,"+ " Amount: $1240.00")
        break
      case 89543:
        print ("Name: Sarah," + " Claim:  5355," + " Sex: F")
        print ("Insurance Type: Home,"+ " Amount: $13240.00")
        break
      default:
        print("Policy doesnt exsit")
    }
    print("**********************************")
    print("Claim# exists = 4345, 5355")
    System.out.print("Enter any Claim#: ")

    var scan1 = new Scanner(System.in)
    var claim = scan1.nextInt()
    switch(claim){
      case 4345:
        print ("Name: Alex," + " Policy: 34576," + " Sex: M")
        print ("Insurance Type: Auto,"+ " Amount: $15000.00")
        break
      case 5355:
        print ("Name: Sarah," + " Policy:  89543," + " Sex: F")
        print ("Insurance Type: Home,"+ " Amount: $13240.00")
        break
      default:
        print("Claim doesnt exsit under any policy")
        break

    }






  }
}