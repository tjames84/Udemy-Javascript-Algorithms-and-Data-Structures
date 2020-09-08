sorring algorithms website:
https://www.toptal.com/developers/sorting-algorithms


what is sorting?
- sorting is the process of rearranging the items in a collection or array so that the items are in some kind of order.

-- examples:
    - sorting numbers from smallet to largest
    - sorting name alphabetically

why?
- soriting is an incredibly common task. so its good to know!
- there are many ways to sort things. Different ways have pros and cons.
- good interview question.

Objectives:

1. bubble sort
2. selection sort
3. insertion sort

*******************************************************************************

Built in JavaScript sort method

- Array.sort()
-- will sort alphabetically
-- when sorting numbers it will not sort well
-- this method accepts an optional comparator function
-- used to tell javascript how you want to sort
-- this comparator looks at pairs of elements (a and b)
    -- if its a nagative number, a comes before b
    -- if its a positive number, a comes after b
    -- if its 0, a and b are the smae as far as the sort is concerned

*******************************************************************************

https://visualgo.net/en/sorting

Bubble Sort -

-- a sorting algorithm where the largest values 'bubble' up to the top.

-- Big O notation
    - O(n^2)

Selection Sort - 

-- similary to bubble sort but puts smaller values into sorted positions. 
-- looks for the min value and compairs to next value to sort the array

-- Bit O notation
    - O(n^2)