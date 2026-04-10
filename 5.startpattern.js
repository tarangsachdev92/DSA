// function startPattern(n) {
//     for (let i = 0; i < n; i++) {
//         let row = " "
//         for (let j = 0; j < n; j++) {
//             row = row + "*"
//         }
//         console.log(row);
//      }
// }

// startPattern(4);


// function startPattern1(n) {
//     for (let i = 0; i < n; i++) {
//         let row = " "
//         // for (let j = 0; j < i + 1; j++) {
//         for (let j = 0; j <= i ; j++) {
//             row = row + "*"
//         }
//         console.log(row);
//     }
// }

// startPattern1(4);


// function startPattern2(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = " "
//         for (let j = 1; j <= i; j++) {
//             row = `${row} ${j}`
//         }
//         console.log(row);
//     }
// }

// startPattern2(6);


// function startPattern3(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = " "
//         for (let j = 1; j <= i; j++) {
//             row = `${row} ${i}`
//         }
//         console.log(row);
//     }
// }

// startPattern3(6);


// function startPattern4(n) {
//     for (let i = 0; i < n; i++) {
//         let row = " "
//         for (let j = 0; j < i+1; j++) {
//             row = `${row} ${i+1}`
//         }
//         console.log(row);
//     }
// }

// startPattern4(6);



// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1 
// function startPattern4(n) {
//     for (let i = 0; i < n; i++) {
//         let row = " "
//         for (let j = 0; j < n - i; j++) {
//             row = `${row} ${j+1}`
//         }
//         console.log(row);
//     }
// }

// startPattern4(5);


//         *
//       * *
//     * * *
//   * * * * 
// * * * * *

// function startPattern5(n) {
//     for (let i = 0; i < n; i++) {
//         let row = " "
//         for (let j = 0; j < n - (i + 1); j++) {
//             row = `${row} -`
//         }
//         for (let k = 0; k < (i + 1); k++) {
//             row = `${row} *`
//         }
//         console.log(row);
//     }
// }

// startPattern5(5);


// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1
// 1 0 1 0 1 0


// function binaryResetTo1OnEachRow(n) {
//     for (let i = 0; i < n; i++) {
//         let row = " ";
//         let toggle = 1;
//         for (let j = 0; j < i + 1; j++) {
//             row = `${row} ${toggle}`
//             if (toggle==1) {
//                 toggle=0
//             } else {
//                 toggle=1
//             }
//         }
//         console.log(row);
//     }
// }

// binaryResetTo1OnEachRow(6);



// 1
// 0 1
// 0 1 0
// 1 0 1 0
// 0 1 0 1 0
// 1 0 1 0 1 0


function binaryNotRefrehingto1(n) {
    let toggle = 1;
    for (let i = 0; i < n; i++) {
        let row = " ";
        for (let j = 0; j < i + 1; j++) {
            row = `${row} ${toggle}`
            if (toggle == 1) {
                toggle = 0
            } else {
                toggle = 1
            }
        }
        console.log(row);
    }
}

binaryNotRefrehingto1(6);







