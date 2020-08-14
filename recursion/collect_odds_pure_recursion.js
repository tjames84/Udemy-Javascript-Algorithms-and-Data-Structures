function collectOddValues(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5])

// [1].concat(collectOddValues([2,3,4,5]))
// returns      [].concat(collectOddValues([3,4,5]))
// returns                 [3].concat(collectOddValues([4,5]))
// returns                             [].concat(collectOddValues([5]))
// returns                                        [5].concat(collectOddValues([]))                                       
// returns                                                    []    
                                                         
// once it hits an empty array the function will return [1,3,5] 
// you can use slice, the spread operator (...) and concat
// strings are immutaable so you need to use methods like slice, substr, or substring to make copies first                        
            