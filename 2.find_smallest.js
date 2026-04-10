function findLargesNumber() {

    let smallest = +Infinity;

    for (let i = 0; i < arr.length; i++){

        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

let arr = [5, 10, 6, 7, 8, 9, 90]
console.log(findLargesNumber (arr))
