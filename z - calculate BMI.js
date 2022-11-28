// https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript

bmi = (wt, ht) => 
    (wt/ht/ht <= 18.5) ? "Underweight" :
    (wt/ht/ht <= 25) ? "Normal" :
    (wt/ht/ht <= 30) ? "Overweight" : "Obese"




// const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
//                                     bmi <= 25 ? "Normal" :
//                                     bmi <= 30 ? "Overweight" : "Obese";