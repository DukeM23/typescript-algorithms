function quicksort(arr: Array<number>): any {
    const arrLen = arr.length
    let lower:Array<number> = []
    let upper:Array<number> = []
    if(arrLen < 2) return arr

    if(arrLen === 1) {
        return [arr[0]]
    } else {
        const pivot = arr[0]
        for(let i = 1 ; i < arrLen ; i++) {
            if(arr[i] < pivot) {
                lower.push(arr[i])
            } else {
                upper.push(arr[i])
            }
        }
        const res:Array<number> = []
        const sortedLower = quicksort(lower)
        const sortedUpper = quicksort(upper) 
        return res.concat(sortedLower, pivot, sortedUpper)
    }
}

export default quicksort