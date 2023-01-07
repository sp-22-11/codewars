// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

const makeNegative = n =>
    (n < 0) ? n : n * -1

function makeNegative(num) {
    return num < 0 ? num : -num;
}
// just add the - sign

function makeNegative(num) {
    return -Math.abs(num);
}