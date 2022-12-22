// https://www.codewars.com/kata/559f3123e66a7204f000009f/train/javascript

const ArrowFunc = arr =>
    arr.map( a => String.fromCharCode(a) ).join('')


console.log(ArrowFunc([84,101,115,116]))
