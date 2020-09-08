/**
 * Bubble Sort
 * 
 * 1. start looping from the end of the array towards the beginning with a variable 
 * called i 
 * 2. start an inner loop with a variable called j from the begining until i - 1
 * 3. if arr[j] is greater than arr[j + 1] swap those two values
 * 4. return the sorted array
 */

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// ES2015 Version
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

//console.log(bubbleSort([37,45,29,8]))

