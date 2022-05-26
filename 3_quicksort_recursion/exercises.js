// Write out the recursive code for the the sum function
const sum = (arr) => {
    if (!arr.length) return 0
    if (arr.length === 1) return arr[0]

    return arr[0] + sum(arr.slice(1))
}
console.log(sum('Sum of the array [2, 4, 6]:', [2, 4, 6]))

// Write a recursive function to count the number of items in a list.
const count = (arr) => {
    if (arr[0] === undefined) return 0
    return 1 + count(arr.slice(1))
}
console.log('Number of the array elements [2, 4, 6, 6, 5]:', count([2, 4, 6, 6, 5]))

// Find the maximum number in a list.
const max = (arr) => {
    const arrCopy = [...arr]

    return recursiveMax(arrCopy)

    function recursiveMax(arr) {
        if (arr.length === 1) return arr[0]

        const first = arr[0]
        const second = arr[1]

        if (first > second) arr.splice(1, 1)
        if (first <= second) arr.splice(0, 1)

        return recursiveMax(arr)
    }
}
console.log('Maximum number in the list [2, 4, 6, 6, 5]:', max([2, 4, 6, 6, 5]))

// Implement binary search with recursion
const search = (arr, item) => {
    if (!arr.length) return null

    let low = 0
    let high = arr.length - 1

    return recursiveSearch()

    function recursiveSearch() {
        const mid = Math.ceil((low + high) / 2)

        if (arr[mid] === item) return mid
        if (low >= high) return null

        if (arr[mid] > item) {
            high = mid - 1
            return recursiveSearch()
        }
        if (arr[mid] < item) {
            low = mid + 1
            return recursiveSearch()
        }
    }
}
console.log('Search index of num 3 in the list [1, 3, 5, 7, 9]:', search([1, 3, 5, 7, 9], 3))
