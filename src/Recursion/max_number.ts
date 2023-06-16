
function max_number(arr:Array<number>): number {
    if(arr.length === 0) return -1

    if(arr.length === 1) {
        return arr[0]
    } else {
        const popped = arr.pop()!
        const value = max_number(arr)
        return (popped > value ? popped : value)
    }
}

export default max_number