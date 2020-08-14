Javascript Algorithms

Performance testing:

-- https://rithmschool.github.io/function-timer-demo/

-- https://jsbench.me/

-- https://jsben.ch/

Big O notation:

An Algorithm is ( Big O ---> ) O(f(n)) if the number of simple soperations the computer has to do is eventually less than constant times f(n), as n increases.

we are talking about worst case senarior. talking about the upper bound for run time

- f(n) could be linear (f(n) = n)
- f(n) could be quadratic (f(n) = n^2)
- f(n) could be constant (f(n) = 1)
- f(n) could also be something different

*********************************************************************************************

O(1)     - will always have three operations.
O(n)     - number of operations is bounded by a multiple of n.
O(n^2)   - when there is a O(n) inside a O(n) operation.
O(log n) - similar to O(n).

as the input grows how will time elapsed grow.

*********************************************************************************************
What is it? 

    - a way of generalizing or a system to compare performance of code.
    - who cares?
    --- when we are talking about code challegnes or large data sets
    --- performance will matter
    --- its good to have a way to talk about performance
    --- ways to discuss trade offs between different approaches
    --- comes up in interviews

    - Count Operations
    -- example: *, +, -, /
    -- remember that for loops with += will be n additions and n assignments

    - gives us the ablity to talk about how runtime of an algorithm grows as the inputs grow

Simplify Big O expressions.

    - Constants dont matter
    -- O(2n)    === O(n)
    -- O(500)   === O(1)
    -- O(13n^2) === O(n^2)

    - Smaller terms dont matter. think big picture view
    -- O(n + 10)       === O(n)
    -- O(1000n + 50)   === O(n)
    -- O(n^2 + 5n + 8) === O(n^2)

    1. arithmetic operations are constant O(1)
    2. variable is constant O(1)
    3. accessing elements in an array (by index) or object key is O(1)
    4. in a loop complexity is length of the loop times the complexity of what happens in the loop O(n)
    

What is time complexity and space complexity?

    - Time Complexity
    -- how can we analyze the rntime of an algorithm as the size of the inputs increases?

    - Space Complexity
    -- how much additonal memory do we need to allocate in order to run the code in our algorithm?
    -- auxiliary space complexity refers to the space required by the algorithm not the space take up by the inputs.

Evalute time complexity and space complexity of different algorithms using Big O.

    - most primitives are constant space (bool, nums, undefined, null)
    - Strings are O(n) where n is the length of the string
    - Reference types are generally O(n)
    -- where n is the length of the array
    -- where n is the number of keys in an object

What is a logarithm?

- the log of a number is roughty the number of times you can divide that number by 2 before you get the value that is less thanor equal to 1
- log2(value) = exponent || 2^exponent = value
- log === log2
- log time complexity is great! O(log n)

- who cares?

    - searching alogoithms have them
    - sorting algorithms
    - recursion sometimes involves log space complexity

*********************************************************************************************

Recap

    - To analyze the performance of algorithms
    - give us a high level understanding of time or space complexity of algroithms
    - does not care about precision only about general trends (linear, quadratic, or constant)
    - time or space complexity depends on the algorithm and not the hardware that its run on
    - Big O notation is everywhere

*********************************************************************************************

Big O of objects :

- insertion - O(1)
- removal   - O(1)
- searching - O(n)
- access    - O(1)

Big O of object methods :

Object.keys    - O(n)
Object.values  - O(n)
Object.entries - O(n)
hasOwnProperty - O(1)

*********************************************************************************************

Big O of arrays :

insertion  - depends

- push()     - O(1)
- unshift()  - O(n)

removal    - depends

- shift()    - O(n)
- pop()      - O(1)

- searching  - O(n)
- access     - O(1)

Other array methods :

- concat()  - O(n)
- slice()   - O(n)
- splice()  - O(n)
- sort()    - O(n * log n)
- forEach() - O(n)
- map() ______|
- filter()____|
- reduce()____|

*********************************************************************************************

What is an Algorithm? 

- a process or set of steps to accompolish a certain task

how to imporve?

    1. devise a plan for solving problems
    2. master common problem sovling patterns

Problem sovling strategies

    - understand the problem
        1. can you restate the problem in your own words
        2. what are the inputs that go into the problem
        3. what are the outputs that should come from the soultion 
        4. can outputs be determined from the inputs.
        5. how to label important pieces of data in the problem

    - explore concrete examples

        1. start with simple examples
        2. progress to more complex examples
        3. explore examples with empty inputs
        4. explore examples wiht invalid inputs

    - break it down

        1. explicity write out the steps you need to take
        -- forces you to think about the code before you write it


    - solve/simplify

    - look back and refactor
