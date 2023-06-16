// Time: 0(n)
// Space: O(1)
export default function two_sum(numbers: number[], target: number) {
    const N = numbers.length 

    let low = 0;
    let high = N-1;

    while(low <= high) {
        let sum = numbers[low] + numbers[high]
        if(sum === target) return [low + 1, high + 1]

        if(sum > target) {
            high--
        } else {
            low++
        }
    }
}