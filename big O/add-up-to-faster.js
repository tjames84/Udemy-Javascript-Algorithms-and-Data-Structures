function addUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpTo(100));  // 5050 = 100 * (100 + 1) / 2

// performance.now() will only work in Chrome Snippets
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
