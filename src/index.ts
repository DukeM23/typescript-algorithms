import { selection_sort_inplace } from "./Selection Sort/selection_sort"
import { binary_search } from "./Binary Search/binary_search"

const arr = [5, 3, 6, 2 , 4]

const ordered = selection_sort_inplace(arr)

const binary_search_target = binary_search(ordered, 6)

console.log(binary_search_target)
