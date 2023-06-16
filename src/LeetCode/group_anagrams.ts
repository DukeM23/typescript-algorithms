// Time: O(n^2)
// Space: O(n) + O(26) 
function groupAnagrams(strs: string[]): string[][] {
    const map = new Map()

    for(let i = 0 ; i < strs.length ; i++) {
        let ascii = getASCIIKey(strs[i])   
        let value = map.get(ascii) || []
        map.set(ascii, [...value, strs[i]])
    }

    return Array.from(map.values())
};

// Time: O(n)
// Space: O(26)
function getASCIIKey(str: string): string {
    let ascii = new Array(26).fill(0)
    for(let i = 0 ; i < str.length ; i++) {
        let index = getASCII(str[i])
        ascii[index]++ 
    }

    return ascii.toString()
}

// O(1)
function getASCII(char: string): number {
    return char.charCodeAt(0) - "a".charCodeAt(0)
}

export default groupAnagrams