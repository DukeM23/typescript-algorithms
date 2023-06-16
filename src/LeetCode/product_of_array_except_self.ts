// Time: O(n)
// Space: O(1)
function product_of_array_except_inplace(nums: number[]): number[] {
    const N = nums.length  
    
    let outputArray = new Array(N).fill(0)

    outputArray[0] = 1

    for(let i = 1 ; i < N ; i++) {
        outputArray[i] = outputArray[i-1] * nums[i-1] 
    }

    let R = 1
    for(let i = N-1; i >= 0 ; i--) {
        outputArray[i] = R * outputArray[i]
        R = R * nums[i]
    }

    return outputArray
}

// Time: O(n)
// Space: O(n)
function product_of_array_except(nums: number[]): number[] {
    const N = nums.length  
    
    let outputArray = []

    let leftProducts = leftProductArray(nums)
    let rightProducts = rightProductArray(nums)

    for(let i = 0 ; i < N ; i++) {
        outputArray[i] = leftProducts[i] * rightProducts[i]
    }

    return outputArray
}

// Time: O(n)
// Space: O(n)
function leftProductArray(nums: number[]): number[] {
    let N = nums.length
    let leftProductArray = new Array(N).fill(0)

    leftProductArray[0] = 1

    for(let i = 1 ; i < N ; i++) {
        leftProductArray[i] = nums[i-1] * leftProductArray[i-1]
    }

    return leftProductArray
}

// Time: O(n)
// Space: O(n)
function rightProductArray(nums: number[]): number[] {
    let N = nums.length
    let rightProductArray = new Array(N).fill(0)

    rightProductArray[N-1] = 1

    for(let i = N-2 ; i >= 0 ; i--) {
        rightProductArray[i] = nums[i+1] * rightProductArray[i+1]
    }

    return rightProductArray
}

export { product_of_array_except, product_of_array_except_inplace }