// https://www.codewars.com/kata/5f70c883e10f9e0001c89673


const flip = (d, a) =>
    (d === 'R') ? a.sort( (a,b) => (a-b) ) :
        a.sort( (a,b) => (b-a))



// const flip = (d, a) => a.sort((x, y) => d === 'R' ? x - y : y - x);