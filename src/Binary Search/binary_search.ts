function binary_search(arr: Array<number>, target: number) {
    let start = 0
    let end = arr.length -1
    
    while(start < end) {
        let middle = Math.floor(arr.length/2)
        if(arr[middle] === target) {
            return { 
                    arr,
                    index:middle 
                }
        } else if( arr[middle] > target) {
            end = middle
        } else {
            start = middle
        }
        // console.log(middle)
    }
}

export { binary_search }