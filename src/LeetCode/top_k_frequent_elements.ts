export default function top_k_frequent_elements(nums: number[], k: number): number[] {
    const map = new Map()

    for(let i = 0 ; i < nums.length ; i++) {
        let value = map.get(nums[i]) || 1

        if(!map.has(nums[i])) {
            map.set(nums[i], value)
        } else {
            map.set(nums[i], value + 1)
        }
    }

    let sortedMap = new Map([...map.entries()].sort((a,b) => b[1]-a[1]))

    let keys = Array.from(sortedMap.keys())
    let res: number[] = []

    for(let i = 0 ; i < k ; i++) res = [...res, keys[i]]
    
    return res
}