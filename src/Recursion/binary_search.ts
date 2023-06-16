function binary_search(arr: Array<number>, target:number): number {
    const length = arr.length
    let low = 0
    let high = length - 1
    let middle = Math.floor((high-low) / 2) 
    // console.log(`${low} ${high} ${middle}`)
    if(length === 0) return -1

    if(arr[middle] === target) {
        return arr[middle]
    } else if(target > middle) {
        low = middle + 1
        return binary_search(arr.slice(low, high+1), target)
    } else {
        high = middle - 1
        return binary_search(arr.slice(low, high+1), target)
    }

}

export default binary_search