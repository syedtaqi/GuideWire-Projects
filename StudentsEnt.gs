/**
 * Created by cool_ on 2020-01-10.
 */
class StudentsEnt {
  public static function main(args : String[]) {

    var stu1 : Students = new Students()
    stu1.name = "John Alain"
    stu1.dob = 12032001
    stu1.gender = 'M'
    stu1.StdNum = 11122
    stu1.subject = "Robotics"
    stu1.age = 15
    stu1.height = 5.75

    var stu2 : Students = new Students()
    stu2.name = "Jane Derris"
    stu2.dob = 05041995
    stu2.gender = 'F'
    stu2.StdNum = 22144
    stu2.subject = "Chemistry"
    stu2.age = 21
    stu2.height = 5.95

    var stu3 : Students = new Students()
    stu3.name = "Diana Jones"
    stu3.dob = 09441995
    stu3.gender = 'F'
    stu3.StdNum = 33211
    stu3.subject = "Biology"
    stu3.age = 33
    stu3.height = 5.99

    var stu4 : Students = new Students()
    stu4.name = "Raymond Dennis"
    stu4.dob = 07121998
    stu4.gender = 'M'
    stu4.StdNum = 88443
    stu4.subject = "Robotics"
    stu4.age = 28
    stu4.height = 5.5

    var allStds = {stu1.name, stu2.name, stu3.name, stu4.name}
    for (ab in allStds) {
      if (ab.contains("J")) {
        print(ab)
      }
    }


    var StuDATA : List<Students> = new ArrayList()

    StuDATA.add(stu1)
    StuDATA.add(stu2)
    StuDATA.add(stu3)
    StuDATA.add(stu4)

    //try/catch it will try to excecute what is in try block, if there are any errors it will take in catch block
    //Runtime-Errors

    //Protected can be used on the sub-classes
    //Public, Private can be used in classes
    var cc : ChildCalculator = new ChildCalculator()

   // var check = StuDATA.where(\h -> h.height > 5.9)
     //   print(check)


    for (i in StuDATA) {
      if (i.age > 21) {
        print(i.name + " Dob: " + i.dob)
        print(i.StdNum)

      }
    }


    for (gen in StuDATA){
      print("****Gender (M/F)*****")
      switch (gen.gender) {
        case "F": {print("F: " + gen.name + ", StdNum: " + gen.StdNum)}
        break
        case "M":
        {print("M: "+ gen.name+ ", StdNum: " + gen.StdNum)}
        break
        default:
          print("Error")
          break
      }
    }

  }
}