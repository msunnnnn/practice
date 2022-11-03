"use strict";

// Nov 2, 2022
// slow with splice and indexOf - try to find a faster solution

// both strings must be same length


function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let arr = t.split("");
  for (let char of s) {
    let idx = arr.indexOf(char);
    if (idx !== -1) {
      arr.splice(idx, 1);
    } else {
      return false;
    }
  }
  return true;

};