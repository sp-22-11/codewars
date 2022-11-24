// https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/javascript


const findDifference = (a, b) => 
 Math.abs((a[0]*a[1]*a[2]) - (b[0]*b[1]*b[2]))


//  function find_difference(a, b) {
//   return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
// }



// function find_difference([a,b,c], [d,e,f]) {
//     return Math.abs(a*b*c-d*e*f)
//   }