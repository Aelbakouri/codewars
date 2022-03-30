// You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

// Examples (Input => Output)
// * "..... + ..............." => "...................."
// * "..... - ..."             => ".."
// * "..... - ."               => "...."
// * "..... * ..."             => "..............."
// * "..... * .."              => ".........."
// * "..... // .."             => ".."
// * "..... // ."              => "....."
// * ". // .."                 => ""
// * ".. - .."                 => ""

// ************************************************************************************************************


function dotCalculator (equation) {
    let op = equation.split(' ')
    let op1 = op[1]
    let dot=op[0].length;
    let dot2=op[2].length;
    console.log(dot)
   return (op1 === '+')?'.'.repeat(dot + dot2) :
          (op1 === '*')?'.'.repeat(dot * dot2) :
          (op1 === '-')?'.'.repeat(dot - dot2) :
                      '.'.repeat(dot / dot2) 
  }
  console.log(dotCalculator("..... // ..............."))
  
   
  