// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md
// https://imranontech.com/2007/01/24/using-fizzbuzz-to-find-developers-who-grok-coding/
// https://www.tomdalling.com/blog/software-design/fizzbuzz-in-too-much-detail/


let fizzbuzz = num => {
    for (i=1; i <= num; i++){
        (i % 15 === 0) ? console.log(i, 'fizzbuzz') : 
            (i % 3 === 0) ? console.log(i, 'fizz') :
            (i % 5 === 0) ? console.log(i, 'buzz') : console.log(i)
    }
}
// console.log(fizzbuzz (30))
// console.log(fizzbuzz (27))
console.log(fizzbuzz (20))


