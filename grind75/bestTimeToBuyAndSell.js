"use strict";

//Nov 2, 2022

//[4,3,6,9,1] => 6

//set min to first element
//set maxDiff to 0
// loop through prices
// if current - min > maxDiff => maxDiff = current - min
// if current < min => min = current

var maxProfit = function (prices) {
  let min = prices[0]
  let maxDiff = 0

  for (let i = 1; i < prices.length; i++){
    if (maxDiff < prices[i] - min){
      maxDiff = prices[i] - min;
    }
    if (min > prices[i]){
      min = prices[i]
    }
  }

  return maxDiff

};

//Nov 1, 2022

//given an array of prices
// find the largest difference between prices

//compare smallest number on left to greatest number on right

//[1,2,3] => 2
//[3,2,1] => 0 -> no profit
//[4,3,6,9,1] => 6

// find smallest number and compare greatest number
// smallest must appear before greatest number
// var maxProfit = function (prices) {
//   let maxDiff = 0
//   for(let i = 0; i < prices.length; i++){
//     for (let j = i+1; j < prices.length; j++){
//       if (prices[j] - prices[i] > maxDiff){
//         maxDiff = prices[j] - prices[i]
//       }
//     }
//   }
//   return maxDiff
// };