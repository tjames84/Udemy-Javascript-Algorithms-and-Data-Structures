Objectives :

    1. Describe what a searching algorithm is...
        
        - searching an array. How do we search?
        -- Given an array the simplest way to search for a value is to look at every element in the array and check to see if its what we are looking for. 

    2. Implement linear search on arrays.

        -- start at the begining and look at every index.
        -- there are many diffent search methods on arrays in javaScript.
         -- indexOf
            -- will return index if its there or -1 if its not in the array
         -- includes
            -- will return true or false
         -- find
         -- findIndex
         
         2.1. Linear Search Big O
            - O(1) best case
            - O(n) average
            - O(n) worst case


    3. Implement binary search on sorted arrays.

        -- is much faster form of searching
        -- Raher than eliminating one element at a time, you can eliminate half of the remaining elements at a time.
        -- Binary search onely works on sorted arrays! 
        -- Divide and Conquer!
            -- cut into left and right
            -- pick a middle. 
            
        3.1. Binary Search Big O
            - O(log n) worst and average
            - O(1) best case

    4. Implement a Naive string searching algorithm.

        -- 

        4.1. Naive String Search Big O

    4. Implement the KMP string searching algorithm.