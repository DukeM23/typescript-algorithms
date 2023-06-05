// Runtime: O(logn)
// Space: O(1)
function binary_search(arr: Array<number>, target: number) {
    let low = 0
    let high = arr.length - 1
    
    while(low <= high) {
        let middle = Math.floor((high-low) / 2)
        if(arr[middle] === target) {
            return middle
        }
        if(arr[middle] < target) {
            low = middle + 1 
        } else {
            high = middle - 1
        }
        
    }
    return -1
}

export { binary_search }