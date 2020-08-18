/**
 * Binary Search
 * This function accepts a sorted array and a value
 * create a left pointer at the strat of the array, and a right pointer at the end of the array
 * while the left pointer comes before the right pointer:
 * --- create a pointer in the middle
 * --- if you find the value you want, return the index
 * --- if the value is too small, move the left pointer up
 * --- if the value is too large, move the right pointer down
 * if you never find the value return -1
 */

// Original Solution
// function binarySearch(arr, elem) {
//     let start = 0;
//     let end = arr.length - 1;
//     let middle = Math.floor((start + end) / 2);
//
//     while(arr[middle] !== elem && start <= end) {
//
//         if( elem < arr[middle] ){
//             end = middle - 1;
//         } else {
//             start = middle + 1;
//         }
//
//         middle = Math.floor((start + end) / 2);
//     }
//
//     if(arr[middle] === elem){
//         return middle;
//     }
//
//     return -1;
// }

// Refactored Version
function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor( (start + end) / 2 );
    
    while( arr[middle] !== elem && start <= end ) {

        if( elem < arr[middle] ) {
            end = middle - 1
        }else {
            start = middle + 1
        };

        middle = Math.floor( (start + end) / 2 );
    }

    return arr[middle] === elem ? middle : -1;
}

binarySearch([2,5,6,9,13,15,28,30], 103)

