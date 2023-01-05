https://www.codewars.com/kata/559590633066759614000063/train/javascript

const minMax = arr => [Math.min(...arr), Math.max(...arr)]


function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  }
// function prototype apply
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply