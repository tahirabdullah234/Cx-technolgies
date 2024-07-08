const arr = [3, 7, 1, 5, 11, 19];
let largest1 = 0;
let largest2 = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest1) {
    largest2 = largest1; 
    largest1 = arr[i];
  } else if (arr[i] > largest2) {
    largest2 = arr[i]; 
  }
}
let sum = largest1 + largest2;
console.log(sum);
