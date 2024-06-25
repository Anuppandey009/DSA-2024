
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
let y =4
let c=3

function floodFillAlgo(arr,x,y,newColor){
  let oldColor= arr[x][y]
   
  function colorFill(arr,x,y,oldColor,newColor){
 
    if(x<0 || x>=arr.length || y<0 || y>=arr[0].length){
      return
    }
    if(arr[x][y]==newColor){
      return
    }
    if(arr[x][y]!=oldColor){
      return
    }
    arr[x][y]=newColor
    colorFill(arr,x+1,y,oldColor,newColor)
    colorFill(arr,x-1,y,oldColor,newColor)
    colorFill(arr,x,y+1,oldColor,newColor)
    colorFill(arr,x,y-1,oldColor,newColor)
  }

  colorFill(arr,x,y,oldColor,newColor)
}

floodFillAlgo(arr,x,y,c)

for(let x of arr){
  console.log(x.join(" "))
}