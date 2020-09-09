/**
 * 
 * Merge Sort Pseudocode
 * 
 * 1. create an empty array, take a look at the smallest values in each input array
 * 2. while there are still values that have not been looked at ...
 *    2.1. if the value in the first array is smaller than the value in the second array, push the value in the 
 *         first array into our results and move on to the next value in the frist array
 *    2.2. if the valu ein the first array is larger than the value in the second arry, push the value in the
 *         second array, push the value in the second array into our results and move on to the next value in the
 *         second array
 *    2.3. once we exhaust one array, push in all remaining values from the other array * 
 * 
 */

// Merge function from earlier
function merge(arr1, arr2){

    let results = [];
    let i = 0;
    let j = 0;
    
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([10,24,76,73]))