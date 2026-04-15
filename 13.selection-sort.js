function selectionSort(a) {
    let n = a.length;

    for (let i = 0; i < n; i++) {

        let min = i;

        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[min]) {
                min = j;
            }
        }

        let temp = a[i];
        a[i] = a[min];
        a[min] = temp;
    }
    return a;
}

// Example
let result = selectionSort([5, 3, 8, 11, 4, 5, 4, 2])
console.log(result);
