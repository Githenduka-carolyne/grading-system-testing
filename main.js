const sciences =(scores) =>{
    if (scores >=70 && scores<=100 )
      return "A"
    else if (scores >=60 && scores<=69 )
      return "B"
    else if (scores >=50 && scores<=59 )
      return "C"
    else if (scores >=40 && scores<=49 )
      return "PASS"
     else (scores <40)
      return "SUP"
  }

  const religious =(scores) =>{
    if (scores >=80 && scores<=100 )
      return "A"
    else if (scores >=70 && scores<=79 )
      return "B"
    else if (scores >=60 && scores<=69 )
      return "C"
    else if (scores >=50 && scores<=59 )
      return "PASS"
     else (scores <50)
      return "SUP"
  }
  
  const humanities =(scores) =>{
    if (scores >=75 && scores<=100 )
      return "A"
    else if (scores >=65 && scores<=74 )
      return "B"
    else if (scores >=55 && scores<=64 )
      return "C"
    else if (scores >=45 && scores<=54 )
      return "PASS"
     else (scores <45)
      return "SUP"
  }

  const studentrecord={
    name: "Dennis Doe",
    math:80,
    eng: 65,
    kis: 48,
    phy:67,
    chem:56,
    cre: 89,
    comp:82
  
  }
  const calculateGradeAndAverage = (studentrecord) =>{

    const grade = {
      name :studentrecord.name,
      math :sciences(studentrecord.math),
      eng :humanities(studentrecord.eng),
      kis :humanities(studentrecord.kis),
      phy :sciences(studentrecord.phy),
      chem:sciences(studentrecord.chem),
      cre:religious(studentrecord.cre),
      comp:humanities(studentrecord.comp)

      
    }

    const average = Math.floor(
      (
        studentrecord.math + studentrecord.eng + studentrecord.kis +
        studentrecord.chem + studentrecord.phy + studentrecord.cre +
        studentrecord.comp
        )/7
    );
      

return {grade, average}


  }

console.log(calculateGradeAndAverage(studentrecord))
module.exports={sciences, humanities,religious }  