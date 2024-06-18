/*  1. Bubble Sort  */
/*
Description: Compares adjacent elements and swaps them if they are in the wrong order.This process is repeated until the list is sorted.

Time Complexity: O(n ^ 2)

Space Complexity: O(1)

Use Case: Simple but inefficient for large datasets.Often used for educational purposes.
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