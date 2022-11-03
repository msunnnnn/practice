"use strict";

//Nov 2, 2022

//left pointer = 0
//right pointer = last index
//while left pointer <= right pointer
// if left = right -> left++ right--
// if !alphabet.includes(left) left++
// if !alphabet.includes(right) right--
// else return false
// return true

var isPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  let alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  let lower = s.toLowerCase();
  while (left <= right) {
    if (lower[left] === lower[right]) {
      left++;
      right--;
    } else if (!alphabet.includes(lower[left])) {
      left++;
    } else if (!alphabet.includes(lower[right])) {
      right--;
    } else {
      return false;
    }
  }
  return true;

};

