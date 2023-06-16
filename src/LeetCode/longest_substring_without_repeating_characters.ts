// Time: O(n^2)
// Space: O(n)
export default function longest_substring_without_repeating_character(s: string): number {
    let set = new Set()

    let l = 0
    let max = 0

    for(let r = 0 ; r < s.length ; r++) {
        while(set.has(s[r])) {
            set.delete(s[l]) 
            l++
        }

        set.add(s[r])
        max = Math.max(max, set.size)
    }

    return max
}