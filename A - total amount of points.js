// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript

const points = (games) => {
    let total = 0;
    for (i=0; i<=9; i++) {
        if (games[i][0] > games[i][2]) {
            total += 3
        } else {
            if (games[i][0] == games[i][2]) {
                total += 1
            }
        }
    }
    return total
}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))



const points = games =>
    games.reduce((output,current) => { return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0; }, 0)




const points = g => g.reduce( (a, [x, _, y]) => a + (x > y ? 3 : x == y), 0)
