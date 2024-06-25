/*  1. Bubble Sort  */
/*
Description: Compares adjacent elements and swaps them if they are in the wrong order.This process is repeated until the list is sorted.

Time Complexity: O(n ^ 2)
Space Complexity: O(1)

Use Case: Simple but inefficient for large datasets.Often used for educational purposes.
*/

/*
Algorithm:
1.  Start from the first element in the array.
2.  Compare the current element with the next element.
3.  If the current element is greater than the next element, swap them.
4.  Move to the next element and repeat step 2 until the end of the array.
5.  Repeat steps 1-4 for the entire array until no swaps are needed in a complete pass.
*/

/*
Pseudocode:
procedure bubbleSort(A: array of n items)
   repeat
     swapped = false
     for i = 1 to n-1 inclusive do
       if A[i-1] > A[i] then
         swap(A[i-1], A[i])
         swapped = true
       end if
     end for
   until not swapped
end procedure
*/


let arr = [8, 2, 3, 7, 1, 6, 4, 5, 9]
console.log('Initial arr:', arr)

function bubbleSort (arr)
{
    let n = arr.length;
    for(let i = 0; i < n - 1; i++)  // Traverse the array
    {
        for(let j = 0; j < n - i - 1; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

let result = bubbleSort(arr)
console.log('Sorted arr:', result)

/*
Input:
Initial arr: [8, 2, 3, 7, 1, 6, 4, 5, 9]

Output:
Sorted arr: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/