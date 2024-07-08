function isPalindrome(str) {
  let cleanstr = "";
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "0" && str[i] <= "9")) {
      cleanstr += str[i];
    }
  }
  str = cleanstr;
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("madam"));
console.log(isPalindrome("doctor"));
console.log(isPalindrome("nurses run"));
