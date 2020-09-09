/**
 * 
 * Insertion Sort Pseudocode
 * 
 * 1. start by picking the second element in the array
 * 2. compare the second element to the one before it and swap if necessary
 * 3. continue to the next element. if that is in the incorrect order iterate through the stored 
 *    portion (left side) to place the element in the correct place
 * 4. repeat until the array is sorted
 * 
 */

 let insertionSort = (arr) => {
   let currentVal;

   for (let i = 1; i < arr.length; i++) {
     currentVal = arr[i];

     for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
       arr[j + 1] = arr[j];
     }
     arr[j + 1] = currentVal;

   }
   
   return arr;
 };

 console.log(insertionSort([2, 1, 9, 76, 4]));