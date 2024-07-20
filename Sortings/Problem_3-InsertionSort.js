/*  2. Insertion Sort  */

/*
Description: Insertion Sort is a simple and intuitive sorting algorithm that builds the final sorted array (or list) one item at a time.

Time Complexity: O(n ^ 2)
Space Complexity: O(1)

Use Case:Insertion Sort is a good choice for small arrays or lists or when the array is nearly sorted.
*/

/*
Algorithm:
1.  Start with the second element (index 1) of the array. Consider it as the key.
2.  Compare the key with elements in the sorted portion of the array (to the left of the key).
3.  Shift all elements in the sorted portion that are greater than the key to the right.
4.  Insert the key into its correct position in the sorted portion.
5.  Move to the next element and repeat until the entire array is sorted.
*/

/*
Pseudocode:
for i from 1 to length(A) - 1:
    key = A[i]
    j = i - 1
    while j >= 0 and A[j] > key:
        A[j + 1] = A[j]
        j = j - 1
    A[j + 1] = key
*/

function insertionSort (arr)
{
    for(let i = 1; i < arr.length; i++)
    {
        let key = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
let arr = [5, 2, 9, 1, 5, 6];
console.log(insertionSort(arr)); // Output: [1, 2, 5, 5, 6, 9]