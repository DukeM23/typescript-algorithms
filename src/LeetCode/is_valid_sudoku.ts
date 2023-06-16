// Time: O(81)
// Space: O(81)
// Explanation: 
// Using a Set to keep track of all unique values, store a string containing
// the board value at which coordinate for row, col, and cube section
export default function is_valid_sudoku(board: string[][]): boolean {
    const set = new Set()
    for(let x = 0 ; x < 9 ; x++) {
        for(let y = 0 ; y < 9 ; y++) {
            if(board[x][y] !== ".") {
                if(set.has(`${board[x][y]} found in row ${x}`) ||
                set.has(`${board[x][y]} found in col ${y}`) ||
                set.has(`${board[x][y]} found in cube ${Math.floor(x/3)} ${Math.floor(y/3)}`)) {
                    return false 
                } else {
                    set.add(`${board[x][y]} found in row ${x}`) 
                    set.add(`${board[x][y]} found in col ${y}`)
                    set.add(`${board[x][y]} found in cube ${Math.floor(x/3)} ${Math.floor(y/3)}`)
                }
            }
        }
    }
    return true
}