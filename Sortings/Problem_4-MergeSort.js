/*  2. Insertion Sort  */

/*
Description: Merge Sort is a popular sorting algorithm that uses the divide-and-conquer paradigm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

Time Complexity: O(nlogn)
Space Complexity: O(n)

Use Case: Merge Sort is a versatile and reliable sorting algorithm with a wide range of applications in various domains. Its consistent performance and ability to handle large datasets efficiently make it a valuable tool in both theoretical and practical contexts.
E-commerce and Search Engines, Genomics, Finance, Graphics and Multimedia.
*/

/*
Algorithm:
1.  Divide: Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
2.  Conquer: Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.

Steps:
1.  If the array is of length 0 or 1, then it is already sorted. Return it.
2.  Divide the array into two halves.
3.  Recursively sort each half.
4.  Merge the two halves to produce the sorted array.
*/

/*
Pseudocode:
function mergeSort(arr):
    if length of arr <= 1:
        return arr

    mid = length of arr / 2
    leftHalf = mergeSort(arr[0:mid])
    rightHalf = mergeSort(arr[mid:end])

    return merge(leftHalf, rightHalf)

function merge(left, right):
    result = []
    while left is not empty and right is not empty:
        if left[0] <= right[0]:
            append left[0] to result
            remove left[0] from left
        else:
            append right[0] to result
            remove right[0] from right

    while left is not empty:
        append left[0] to result
        remove left[0] from left

    while right is not empty:
        append right[0] to result
        remove right[0] from right

    return result
*/

function mergeSort (arr)
{
    if(arr.length <= 1)
    {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge (left, right)
{
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length)
    {
        if(left[leftIndex] < right[rightIndex])
        {
            result.push(left[leftIndex]);
            leftIndex++;
        } else
        {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray);  //[3, 9, 10, 27, 38, 43, 82]