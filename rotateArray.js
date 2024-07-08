
function rotateArray(arr){
    let lastElement = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }
    
    arr[0] = lastElement;
    console.log(arr)
}
rotateArray([3, 8, 9, 7, 6]);
