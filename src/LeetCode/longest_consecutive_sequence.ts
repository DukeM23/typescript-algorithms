// Time: O(n^3)
// Space: O(n)
function longest_consecutive_sequence_n(nums: number[]): number {
    let max_sequence = 0
    
    const set = new Set() 
    
    for(let i = 0 ; i < nums.length ; i++) {
        set.add(nums[i])
    }

    for(let i = 0 ; i < nums.length ; i++) {
        let current_num = nums[i]
        let current_sequence = 1

        // Look for smallest number
        if(!set.has(current_num - 1)) {
            while(set.has(current_num + 1)) {
                current_num++
                current_sequence++
            }
        }

        max_sequence = Math.max(max_sequence, current_sequence)
    }

    return max_sequence
}


function longest_consecutive_sequence_ncube(nums: number[]): number {
    let max_sequence = 0

    for(let i = 0 ; i < nums.length ; i++) {
        let current_num = nums[i]
        let current_sequence = 1
        
        while(numberExists(nums, current_num + 1)) {
            current_num++
            current_sequence++
        }
        
        max_sequence = Math.max(max_sequence, current_sequence)
    }

    return max_sequence
}

function numberExists(nums: number[], num: number): boolean {
    for(let i = 0 ; i < nums.length ; i++) {
        if(nums[i] === num) return  true
    }

    return false
}