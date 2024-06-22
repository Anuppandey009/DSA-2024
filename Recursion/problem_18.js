// Flood Fill Algorithm

/* 
Given a 2D screen arr[][] where each arr[i][j] is an integer representing the color of that pixel, also given the location of a pixel (X, Y) and a color C, the task is to replace the color of the given pixel and all the adjacent same-colored pixels with the given color.

Input: arr[][] = { 
{1, 1, 1, 1, 1, 1, 1, 1}, 
{1, 1, 1, 1, 1, 1, 0, 0}, 
{1, 0, 0, 1, 1, 0, 1, 1}, 
{1, 2, 2, 2, 2, 0, 1, 0}, 
{1, 1, 1, 2, 2, 0, 1, 0}, 
{1, 1, 1, 2, 2, 2, 2, 0}, 
{1, 1, 1, 1, 1, 2, 1, 1}, 
{1, 1, 1, 1, 1, 2, 2, 1}} 
X = 4, Y = 4, C = 3 
Output: 
1 1 1 1 1 1 1 1 
1 1 1 1 1 1 0 0 
1 0 0 1 1 0 1 1 
1 3 3 3 3 0 1 0 
1 1 1 3 3 0 1 0 
1 1 1 3 3 3 3 0 
1 1 1 1 1 3 1 1 
1 1 1 1 1 3 3 1 
Explanation: 
The values in the given 2D screen indicate colors of the pixels. X and Y are coordinates of the brush, C is the color that should replace the previous color on screen[X][Y] and all surrounding pixels with the same color. Hence all the 2 are replaced with 3. 
*/



let arr = [
    [1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0, 1, 1],
    [1, 2, 2, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 0, 1, 0],
    [1, 1, 1, 2, 2, 2, 2, 0],
    [1, 1, 1, 1, 1, 2, 1, 1],
    [1, 1, 1, 1, 1, 2, 2, 1]
];

let x = 4
let y = 4
let c = 3

function floodFillAlgo(arr, x, y, newColor) {
    let oldColor = arr[x][y]
    function fill(arr, x, y, oldColor, newColor) {
        if (x < 0 || x >= arr.length || y < 0 || y >= arr[0].length) {
            return
        }
        if (arr[x][y] != oldColor) {
            return
        }
        if (arr[x][y] == newColor) {
            return
        }
        arr[x][y] = newColor
        fill(arr, x + 1, y, oldColor, newColor)
        fill(arr, x - 1, y, oldColor, newColor)
        fill(arr, x, y + 1, oldColor, newColor)
        fill(arr, x, y - 1, oldColor, newColor)
    }

    fill(arr, x, y, oldColor, newColor)
}


floodFillAlgo(arr, x, y, c)
for (let x of arr) {
    console.log(x.join(" "))
}