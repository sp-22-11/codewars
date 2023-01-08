
// https://www.codewars.com/kata/572b77262bedd351e9000076/train/javascript

function first(arr, n) {
    if (n===undefined) {n=1}
    return arr.splice(0,n)
  }

console.log(first ([788,158,'pUCv',402,'zdAQY','%M!bjdI',868,879,402], 3))
console.log(first (['a', 'b', 'c', 'd', 'e'], 0))
console.log(first (['a', 'b', 'c', 'd', 'e'], 2))

const first = (arr, n = 1) => arr.slice(0, n)
// set default in the arguments list