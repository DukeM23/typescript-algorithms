export default function valid_anagram(s: string, t: string): boolean {
    if(s.length !== t.length) return false
    
    let map = new Map()

    for(let i = 0 ; i < t.length ; i++) {
        let value = map.get(t[i]) || 0
        map.set(t[i], value + 1)
    }

    for(let i = 0 ; i < s.length ; i++) {
        let value = map.get(s[i]) || 0
        if(map.has(s[i])) { // Will only decrement numbers that are above zero
            map.set(s[i], value - 1)
        }
    }

    for(const value of map.values()) {
        if(value != 0) return false
    }

    return true
}