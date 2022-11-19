https://www.codewars.com/kata/5951d30ce99cf2467e000013/train/javascript


isPythagoreanTriple = num => {
    let int = num.sort( (a,b) => a-b );
    (int[2]**2 == (int[0]**2) + (int[1]**2)) ? true : false
}



isPythagoreanTriple = num => {
    let int = num.sort( (a,b) => a-b );
    return int[2]**2 == (int[0]**2) + (int[1]**2))
}


function isPythagoreanTriple ( [a, b, c], hypo = (a, b, c) => (a*a + b*b == c*c) ) {
    return hypo( a, b, c ) || hypo( c, b, a ) || hypo( a, c, b )
}
