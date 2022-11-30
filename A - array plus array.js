https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript

const arrayPlusArray = (a1, a2) =>
    a1.reduce( (sum, x) => sum + x, 0) + a2.reduce( (sum, x) => sum + x, 0)


// const arrayPlusArray = (a1, a2) =>
//     a1.concat(a2).reduce( (sum, x) => sum + x, 0)


// const arrayPlusArray = (...arrays) =>
//     [].concat(...arrays).reduce( (sum, x) => sum + x, 0)


// const arrayPlusArray = (a1, a2) =>
//     [...a1, ...a2].reduce( (sum, x) => sum + x, 0)