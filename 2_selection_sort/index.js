const selectionSort = (arr) => {
    const arrCopy = [...arr]
    const newArr = []

    while (arrCopy.length) {
        const smallest = findSmallest(arrCopy)
        newArr.push(...arrCopy.splice(smallest, 1))
    }

    return newArr
}

console.log(selectionSort([5, 3, 6, 2, 10]))

function findSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
            smallestIndex = i
        }
    }

    return smallestIndex
}