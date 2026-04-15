// time complexity
// first loop -O(n)
// while loop - O(n)
// O(n^2)

// space complexity
// O(1);

function insertionSort(a) {
    let n = a.length;

    for (let i = 1; i < n; i++) {

        let curr = a[i];
        let prev = i - 1;

        while (a[prev] > curr && prev >= 0) {
            a[prev + 1] = a[prev];
            prev--;
        }
        a[prev + 1] = curr;
    }
    return a;
}

// Example
let result = insertionSort([5, 3, 8, 11, 4, 2])
console.log(result);
