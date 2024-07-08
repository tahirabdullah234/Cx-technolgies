const arr = [3, 4, 9, 1, 7, 3, 2, 6];
let maxNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    let missingNumbers = [];
    for (let i = 0; i <= maxNumber; i++) {
       if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
console.log(missingNumbers);