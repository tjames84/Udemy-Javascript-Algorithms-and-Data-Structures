function addUpTo(n) {
    let total = 0;

    for( let i = 1; i <= n; i++ ) {
        total += i;
    }

    return total;
}

console.log(addUpTo(100));

// performance.now() will only work in Chrome Snippets
// let t1 = Performance.now();
// addUpTo(1000000000);
// let t2 = Performance.now();

// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
