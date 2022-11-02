"use strict";

//Nov 1, 2022

//given an array of prices
// find the largest difference between prices

//[1,2,3] => 2
//[3,2,1] => 0 -> no profit
//[4,3,6,9,1] => 6

// find smallest number and compare greatest number
// smallest must appear before greatest number


var maxProfit = function (prices) {
  let maxDiff = 0
  for(let i = 0; i < prices.length; i++){
    for (let j = i+1; j < prices.length; j++){
      if (prices[j] - prices[i] > maxDiff){
        maxDiff = prices[j] - prices[i]
      }
    }
  }
  return maxDiff
};