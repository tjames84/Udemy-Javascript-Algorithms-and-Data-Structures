/**
 * Selection Sort
 * 
 * 1. store the first element as the smallest value
 * 2. compare this item to the next item in the array until you find the smaller value
 * 3. if a smaller number is found, set that value as the new min and continue until the end
 * 4. if the min is not the value (index) you started with swap the two values
 * 5. repeat until array is sorted. 
 * 
 */

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      // console.log(`${arr[i]} --- ${arr[j]}`)
    }

    if (i !== lowest) {
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }

  return arr;
};

console.log(selectionSort([34, 15, 7, 19, 60, 1, 10]));

// ES2015 VERSION
// function selectionSort(arr) {
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }

//   return arr;
// }


