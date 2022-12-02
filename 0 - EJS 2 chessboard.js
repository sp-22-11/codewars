// https://eloquentjavascript.net/02_program_structure.html

const chessboard = size => {
    for (i = 1; i <= size; i++) {
        let str = ''
        for (j = 1; j <= size; j++) {
            ((i+j) % 2 === 0) ? str += ' ' :  str += '#'
            // console.log(str)
        }
    console.log(str, '\n')
    }
}

chessboard (8)



