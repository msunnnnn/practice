"use strict";

//Nov 2, 2022

//[1, 2, 3, 4, 5, 6], 5 => 4

//left = 0
//right = nums.length - 1
// find midpoint of left and right, Math.floor(left+right/2)
// if midpoint = num
// return midpoint
// if midpoint < num
// right = midpoint - 1
// if midpoint > num
// left = midpoint + 1

function search(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let midpoint;

  while (left <= right) {
    midpoint = Math.floor(left + right / 2);
    if (nums[midpoint] === target) {
      return midpoint;
    } else if (nums[midpoint] > target) {
      right = midpoint - 1;
    } else if (nums[midpoint] < target) {
      left = midpoint + 1;
    }
  }
  return -1;
}