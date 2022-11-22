"use strict";

//Nov 1, 2022

var twoSum = function(nums, target) {
  let seen = {}
  let i = 0
  for (let num of nums){
    let diff = target - num
    if (diff in seen){
      return ([i, seen[diff]])
    }
    seen[num] = i
    i++
  }
};