// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

grow = x => {
    let product = 1;
    for(i=0; i<x.length; i++){
      product *= x[i]
    }
    return product
  }



// const grow = x => x.reduce((a,b) => a*b);
// const grow = (nums) => nums.reduce((product, num) => product * num, 1);