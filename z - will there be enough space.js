// https://www.codewars.com/kata/5875b200d520904a04000003/train/javascript

const enough = (cap, on, wait) =>
    (wait <= (cap - on)) ? 0 : (wait - (cap - on))



function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
}