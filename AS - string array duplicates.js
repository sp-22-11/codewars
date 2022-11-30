const delDup = word => {
    let result = ''
    for( i=0; i < word.length; i++ ){
        if (word[i] != word[i-1]){
            result += word[i]
        }
    }
    return result;
  }

dup = arr =>
  arr.map(( word ) => delDup( word ))



// const dup = s =>
//   s.map( (word, i) => word.split('').filter( (letter, i, arr) => letter != arr[i+1]).join(''))