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

