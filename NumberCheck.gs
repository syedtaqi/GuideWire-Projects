/**
 * Created by Taqi Raza_ on 2019-12-13.
 */

uses java.util.*
uses java.util.Scanner


class NumberCheck {
  public static function main(args : String[]){

    System.out.print("Enter Integer: ")
    var scan = new Scanner(System.in)

    /**Any integer not divisible by 2 is odd number, and if it is divisible by 2 is even number
    //Scanner function used to read user input
    //if conditions are used to check if the user input value is even/odd number..
    **/

    var num = scan.nextInt()
    // if it is even value of modulus will be 0

    if (num%2 != 0) {
      print(num + " is odd number")
    }

     if (num %2 == 0){
      print (num+ " is even number")

    }

    print ("..............................................")
    /**writing a for loop for prime number or not
     *for loop is used to determine if the given number isPrime is prime or not.
     * We only have to loop through 2
     * Inside the for loop, we check if the number(isPrime) is divisible by any number in the given range (2..num/2).
     * If it is, flagPrime is set to true and we break out of the loop. This shows that number isPrime is not a prime number.
     *If number isPrime isn't divisible by any other number, flagPrime is set as false and this shows number entered isPrime is prime number.
     */

    System.out.println("Checking Prime Numbers ")
    System.out.print("Enter Integer: ")
    var isPrime = scan.nextInt()
    var flagPrime : boolean = true
    for ( i in 2..isPrime-1){

      if (isPrime % i == 0){
        flagPrime = false
        break

      }
      i++

      if(flagPrime){
        print(isPrime+ " is a prime number")

      }
      else{
        print(isPrime+ " is not a prime number")
      }



    }
    print(".......................................")
    //its not working on 2... 2 is prime number, as well as even number. How to make it work



    /**if else if statement for prime checker....

    //PrimeCheck - if a prime number is not divisible by 1 or itself then it is not a prime number
    // if number is divisible by 1 or by itself then it is a prime number
    // % modulus represents positive value

    // if (num %2 == 1 || num %2 == num || num==2){   ///Hardcoding num==2 is not a good method
    // print (num+ " is prime number")
    // }
    // else if (num %2 != 1 || num %2 != num){
    //   print (num+ " is not prime number")
    // }

   * else {print(num)} **/





  }
}