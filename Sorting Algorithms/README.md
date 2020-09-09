sorring algorithms websites:
- https://www.toptal.com/developers/sorting-algorithms
- https://visualgo.net/en/sorting

what is sorting?
- sorting is the process of rearranging the items in a collection or array so that the items are in some kind of order.

    - examples:
        - sorting numbers from smallet to largest
        - sorting name alphabetically

why?
- sorting is an incredibly common task. so its good to know!
- there are many ways to sort things. Different ways have pros and cons.
- good interview question.

Objectives:

1. bubble sort
2. selection sort
3. insertion sort
4. merge sort
5. quick sort
6. radix sort

*******************************************************************************

Built in JavaScript sort method

- Array.sort()
    - will sort alphabetically
    - when sorting numbers it will not sort well
    - this method accepts an optional comparator function
    - used to tell javascript how you want to sort
    - this comparator looks at pairs of elements (a and b)
        - if its a nagative number, a comes before b
        - if its a positive number, a comes after b
        - if its 0, a and b are the smae as far as the sort is concerned

*******************************************************************************

Bubble Sort -

- a sorting algorithm where the largest values 'bubble' up to the top.
- works well with small data arrays
- does not perform well with very large arrays 

- Big O notation
    - O(n)   best
    - O(n^2) average, worst
    - O(1)   space complexity

*******************************************************************************

Selection Sort - 

- similary to bubble sort but puts smaller values into sorted positions. 
- looks for the min value and compairs to next value to sort the array
- does not perform well with very large arrays 

- Big O notation
    - O(n^2) best, average, worst
    - O(1)   space complexity

*******************************************************************************

Insertion Sort -

- gradually creating a larger left portion of the array which is always sorted
- does not perform well with very large arrays 

- Big O notation
    - O(n)   best
    - O(n^2) average, worst
    - O(1)   space complexity 

*******************************************************************************

Merge Sort -

- combo of two things : merging and sorting
- exploits the fact that arrays of 0 or 1 elements are alwasy sorted
- decomposes the array into smaller arrays of 1 or 1 elements then builds up a newly sorted array

- Big O notation
    - O(n log n) best, average, worst
    - O(n)       space complexity

*******************************************************************************