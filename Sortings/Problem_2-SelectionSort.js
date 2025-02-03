/*  2. Selection Sort  */

/*
Description: Selection Sort is a simple comparison-based sorting algorithm.

Time Complexity: O(n ^ 2)
Space Complexity: O(1)

Use Case: Its primary advantage is its simplicity and the fact that it requires no additional memory beyond the input array, making it a useful choice for educational purposes or small datasets.
*/

/*
Algorithm:
1.  Initialization: Start with the first element as the current minimum.
2.  Find Minimum: Traverse the unsorted part of the array to find the minimum element.
3.  Swap: Swap the found minimum element with the first element of the unsorted part.
4.  Move Boundary: Move the boundary between the sorted and unsorted parts one element to the right.
5.  Repeat: Repeat the process for the remaining unsorted part of the array.
*/

/*
Pseudocode:
for i = 0 to n-1 do
    min_index = i
    for j = i+1 to n-1 do
        if array[j] < array[min_index] then
            min_index = j
    end for
    if min_index != i then
        swap array[i] and array[min_index]
    end if
end for
*/

function selectionSort (arr)
{
    let n = arr.length;

    for(let i = 0; i < n - 1; i++)
    {
        // Assume the minimum is the first element
        let minIndex = i;

        // Test against elements after i to find the smallest
        for(let j = i + 1; j < n; j++)
        {
            // If this element is less, then it is the new minimum
            if(arr[j] < arr[minIndex])
            {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first element
        if(minIndex !== i)
        {
            [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
        }
    }

    return arr;
}

// Example usage:
let array = [64, 25, 12, 22, 11];
console.log("Unsorted array:", array); //Unsorted array: [ 64, 25, 12, 22, 11 ]
let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray); //Sorted array: [ 11, 12, 22, 25, 64 ]
