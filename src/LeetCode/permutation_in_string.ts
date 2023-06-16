// Time: O(n * n) = O(n^2)
// Space: O(26n)
export default function permutation_in_string(s1: string[], s2:string[]): boolean {
    let s1Ascii = getASCIIKey(s1)

    let l = 0
    for(let i = s1.length - 1 ; i < s2.length ; i++) {
        let windowedAscii = getASCIIKey(s2.slice(l, s1.length + 1))
        
        l++
        
        if(s1Ascii === windowedAscii) return true
    }

    return false
}

// Time: O(n)
// Space: O(26)
function getASCIIKey(s: string[]): string {
    const arr = new Array(26).fill(0)

    for(let i = 0 ; i < s.length ; i++) {
        arr[getASCII(s[i])] += 1
    } 

    return arr.toString()
}

// Time: O(n)
function getASCII(c: string): number {
    return c.charCodeAt(0) - 'a'.charCodeAt(0)
}