// https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript

const addLength = str => 
    str.split(' ').map(x => x + ' ' +  x.length)


console.log (addLength ('apple ban'))