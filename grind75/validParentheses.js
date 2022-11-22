"use strict";

//Nov 1, 2022
var isValid = function (s) {
  if (s.length <= 1) {
    return false;
  }
  let arr = [];
  for (let p of s) {
    if (p === "{" || p === "(" || p === "[") {
      arr.push(p);
    } else if (p === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (p === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else if (p === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else {
      return false;
    }
  }
  if (arr.length) {
    return false;
  }
  return true;
};