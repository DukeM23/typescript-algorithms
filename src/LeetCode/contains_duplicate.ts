function contains_duplicate(nums: number[]): boolean {
    if(nums.length < 2) return false
    const map = new Map()

    for(let i = 0 ; i < nums.length ; i++) {
        let val = map.get(nums[i]) || 0
        if(!map.has(nums[i])) {
            map.set(nums[i], val)
        } else {
            return true
        }
    }

    return false
}