function count(arr:Array<any>): number {
    if(arr.length === 0) return -1

    if(arr.length === 1) {
        return 1
    } else {
        arr.shift()
        return 1 + count(arr)
    }
}

export default count