// https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript

saleHotdogs = n =>
  (n < 5) ? n*100 :
    (n < 10) ? n*95 : n*90


saleHotdogs = n =>
    n * (n<5 ? 100 : n<10 ? 95 : 90);