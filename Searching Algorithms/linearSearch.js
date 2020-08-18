/**
 * Linear Search 
 *  
 * This function will accept an array and a value
 * Loop through the array and check if the current array elemnt is equal to the value
 * If it is, return the index at which the element is found
 * if the value is never found, return -1
*/

// function linearSearch (array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return i;
//         }     
//     }
//     return -1;
// }

const linearSearch = (array, value) => {
    return array.indexOf(value);
}

console.log(linearSearch([1,2,3,4,5], 9)); // -1
console.log(linearSearch([1,2,3,4,5], 3)); // 2