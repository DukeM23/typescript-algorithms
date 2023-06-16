import { selection_sort } from "./Selection Sort/selection_sort"
import { binary_search } from "./Binary Search/binary_search"
import sum from "./Recursion/sum"
import count from "./Recursion/count"
import max_number from "./Recursion/max_number"
import binary_search_recur from "./Recursion/binary_search"
import quicksort from "./Quicksort/quicksort"
import { product_of_array_except, product_of_array_except_inplace } from "./LeetCode/product_of_array_except_self"

const arr = [10, 5 ,2 ,3]
const recur_quicksort = product_of_array_except_inplace(arr)

console.log(recur_quicksort)
