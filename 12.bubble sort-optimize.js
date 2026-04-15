function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let isSwapped = false;

        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                isSwapped = true;
            }
        }
        if (!isSwapped) break;

    }

    return arr;
}

// Example
console.log(bubbleSort([5, 3, 8, 11, 4, 54, 5, 4, 2]));
