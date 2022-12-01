// https://www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript


findMultiples = ( integer, limit ) => {
    let multiples = []
    for ( i=1; i*integer <= limit; i++ ) {
      multiples.push( i * integer )
    }
    return multiples
  }


  function findMultiples(int,limit){
    let result = []
    for (let i = int; i<=limit ; i+=int)
      result.push(i)
    return result
  }


// try #2   2022 12 01

const findMultiples = (int, lmt) =>
Array.from( {length: lmt/int}, (_, i) => int * (i+1) )
// many used parseInt, bitwise OR (^), or Math.floor to make lmt/int an integer

// const findMultiples = (int, lmt) =>
//     Array.from( {length: parseInt(lmt/int)}, (_, i) => int * (i+1) )

// const findMultiples = (int, lmt) =>
//     [...Array( lmt/int ^ 0)].map( (_,i) => int * (i+1))
