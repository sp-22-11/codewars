const countRedBeads = n => (n<2) ? 0 : (2*(n-1))



const countRedBeads2 = n => 2* ( (n || 2) - 1 )
// using || n an equation!!



const countRedBeads3 = n => n && (2 * --n)
// if n=0, the statement is false
// if n=1, the product is 0