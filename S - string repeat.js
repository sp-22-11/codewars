// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

function repeatStr (n, s) {
    let str = ''
    for (i=0; i<n; i++){
      str += s
    }
    return str
  }



repeatStr = (n, s) => s.repeat(n)
// neater
