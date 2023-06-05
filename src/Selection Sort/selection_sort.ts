// Run time: O(n)
function findSmallest(arr: Array<number>) {
    let smallest = arr[0]
    let smallest_idx = 0
    for(let i = 1 ; i < arr.length ; i++) {
      if(arr[i] < smallest) {
        smallest = arr[i]
        smallest_idx = i
      }
    }
    return smallest_idx;
  }
  
// Runtime: O(n * n) = O(n*2)
// Space: O(n)
function selection_sort(arr: Array<number>) {
    const newArr = []
    while(arr.length !== 0) {
        let smallest = findSmallest(arr)
        newArr.push(arr[smallest])
        arr.splice(smallest, 1)
    }
    return newArr;
}


// Runtime: O(n)
// Space: O(1)
function selection_sort_inplace(arr: Array<number>) {
    for(let i = 0 ; i < arr.length ; i++) {
        let smallest = i
        for(let x = i + 1 ; x < arr.length ; x++) {
            if(arr[x] < arr[smallest]) {
                smallest = x
            }
        }
        let temp = arr[smallest] 
        arr[smallest] = arr[i]
        arr[i] = temp
    }
    return arr
}

export { selection_sort, selection_sort_inplace }