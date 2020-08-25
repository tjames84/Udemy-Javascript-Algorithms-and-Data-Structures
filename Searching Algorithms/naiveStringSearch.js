/**
 * Naive String Search
 *
 * Pseudocode
 * 1. loop over the longer string
 * 2. loop over the shorter string
 * 3. if the characters match break out of inner loop
 * 4. if the characters do match, keep going
 * 5. if you complete the inner loop and find a match, increment the count
 * 6. return count
 *
 */

function naiveSearch(long, short) {
  let count = 0;

  for (let i = 0; i < long.length; i++) {

    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }

      if (j === short.length - 1) {
        console.log("found one!");
        count++;
      }

    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lo"));
