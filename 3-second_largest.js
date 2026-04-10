function findSecondLargesNumber(arr) {

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    // check array if empty what to return
    if (arr.length < 2) {
        return null
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
            secondLargest = arr[i];
        }
    }

    // return largest;
    return secondLargest;
}

let arr = [4, 9, 0, 2, 8, 7, 1]
let arr1 = [-4, -9, 0, -2, -8, -7, -1] // negative
let arr2 = [] // blank array
let arr3 = [10, 20, 8, 9, 3, 5, 20] // duplicate
console.log(findSecondLargesNumber(arr))
console.log(findSecondLargesNumber(arr1))
console.log(findSecondLargesNumber(arr2))
console.log(findSecondLargesNumber(arr3))
