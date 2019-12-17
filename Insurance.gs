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

    //create policy accounts (3 different clients using for loop)
    // store it in array,
    // ask user to enter policy#,
    // display information as per the accounts created in an array



      for (i in 1..3) {
        System.out.println("Do you have Customer Account Y/N??*** ")
        var CustAcc = new Scanner(System.in)
        var Customer = CustAcc.nextLine()

        print("*************************")
        if (Customer == "N" || Customer == "n") {


          System.out.println(i + " .Create Customer Account*** ")
          System.out.print("Name: ")
          var acc = new Scanner(System.in)
          var accScan = acc.nextLine()

          System.out.print("Sex (M/F: ")
          var acc1 = new Scanner(System.in)
          var acc1Scan = acc1.nextLine()

          System.out.print("Policy: ")
          var policy1 = new Scanner(System.in)
          var policyScan = policy1.nextInt()

          System.out.print("Claim: ")
          var claim = new Scanner(System.in)
          var claimScan = claim.nextInt()

          System.out.print("Home/Auto: ")
          var type = new Scanner(System.in)
          var instype = type.nextLine()

          System.out.print("Amount: ")
          var amt = new Scanner(System.in)
          var amountScan = amt.nextInt()

          print("*************************")
          var ScanArr : String[] = {"Name:" + accScan + " Sex:" + acc1Scan + " Policy: " + policyScan + " Claim: " + claimScan + " Amount:" + amountScan + " Type: " + instype}

          print("Policy# available: " + policyScan)
          System.out.print("Enter Policy#: ")
          var scan = new Scanner(System.in)
          var policy = scan.nextInt()

          switch (policy) {
            case policyScan:
              print(ScanArr)
              break
            default:
              print("Policy doesnt exsit")
          }
          print("**********************************")

          var ifClaim = new Scanner(System.in)
          System.out.println("Do you want to check if claim exist? Y/N ")
          var checkClaim = ifClaim.nextLine()

          var ClaimArr : String[] = {"Name:" + accScan + " Sex:" + acc1Scan + " Policy: " + policyScan + " Amount:" + amountScan + " Type: " + instype}

          switch (checkClaim) {
            case "Y": {
              print("Claim# exists: " + claimScan)
              System.out.print("Enter Claim#: ")
              var scan1 = new Scanner(System.in)
              var claim1 = scan1.nextInt()


              switch (claim1) {
                case claimScan:
                  print(ClaimArr)

                  break
                default:
                  print("Claim doesnt exsit under any policy")
                  break

              }
              break

            }
            default:
              print("Closing software...")

          }


        } else {
          print("***Insurance Policy Data****")
          print("Policy# exists 34576, 47865, 89543")
          System.out.print("Enter Policy#: ")
          var scan = new Scanner(System.in)
          var policy = scan.nextInt()

          switch (policy) {
            case 34576:
              print("Name: Alex," + " Claim: 4345," + " Sex: M,")
              print("Insurance Type: Auto," + " Amount: $15000.00")
              break
            case 47865:
              print("Name: John," + " Claim: Doesnt Exist," + " Sex: M")
              print("Insurance Type: Auto," + " Amount: $1240.00")
              break
            case 89543:
              print("Name: Sarah," + " Claim:  5355," + " Sex: F")
              print("Insurance Type: Home," + " Amount: $13240.00")
              break
            default:
              print("Policy doesnt exsit")
          }
          print("**********************************")
          print("Claim# exists = 4345, 5355")
          System.out.print("Enter existing Claim#: ")

          var scan1 = new Scanner(System.in)
          var claim = scan1.nextInt()
          switch (claim) {
            case 4345:
              print("Name: Alex," + " Policy: 34576," + " Sex: M")
              print("Insurance Type: Auto," + " Amount: $15000.00")
              break
            case 5355:
              print("Name: Sarah," + " Policy:  89543," + " Sex: F")
              print("Insurance Type: Home," + " Amount: $13240.00")
              break
            default:
              print("Claim doesnt exsit under any policy")
              break

          }


        }
      }
    }


    }




    //for loop ...
    // if else loop...




