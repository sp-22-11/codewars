// https://www.codewars.com/kata/56414fdc6488ee99db00002c/train/javascript


const absentVowel = str =>
 !str.includes( 'a' ) ? 0 :
    !str.includes( 'e' ) ? 1 :
    !str.includes( 'i' ) ? 2 :
    !str.includes( 'o' ) ? 3 : 4



// const absentVowel = string =>
//     [ ...'aeiou' ].findIndex( letter => !string.includes( letter ) )



// const absentVowel = string => {
//     let vowels = [ ...'aeiou'];
//     for (i = 0; i < 5; i++) {
//       if ( string.indexOf( vowels[i] ) == -1) {
//         return i
//       }
//     }
//   }
