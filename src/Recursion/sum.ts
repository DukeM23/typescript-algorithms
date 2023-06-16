// Time: O(logn)
// Space: O(1)

function sum(arr: Array<number>): number {
    if(arr.length === 0) return -1

    if(arr.length === 1) {
        return arr[0]
    } else {
        let val = arr.shift()!
        return val + sum(arr)
    }
}

export default sum