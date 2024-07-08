function mostRepeated(arr) {
  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (countMap[num] === undefined) {
      countMap[num] = 0;
    }
    countMap[num]++;
  }
  let maxValue = 0;
  for (let key in countMap) {
    if (countMap[key] > maxValue) {
      maxValue = countMap[key];
    }
  }
  const result = [];
  for (let key in countMap) {
    if (countMap[key] === maxValue) {
      result.push(key);
    }
  }
  process.stdout.write(
    result.length == 1 ? "Most repeated value is " : "Most repeated values are "
  );
  for (let i = 0; i < result.length; i++) {
    process.stdout.write(
      result[i] +
        (i == result.length - 2 ? " and " : i == result.length - 1 ? "" : ", ")
    );
  }
  console.log('')
}
mostRepeated([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5]);
mostRepeated([4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 5, 8, 5, 1, 5]);
mostRepeated([4, 3, 5, 6, 4, 7, 6, 2, 4, 6, 3, 4, 6, 3, 5, 8, 5, 1, 5]);