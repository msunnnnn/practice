"use strict";

//Nov 3, 2022
// need more practice

var mergeTwoLists = function(list1, list2) {
  //make new list
  let current = new ListNode()
  //create a variable for current to access head of list
  let result = current
  while(list1 && list2){
      if (list1.val < list2.val){
          //add new node for current as the greater value between list1/list2
          current.next = list1
          //set current list1's node to the next node
          list1 = list1.next
      } else {
          current.next = list2
          list2 = list2.next
      }
      //set current pointer to next
      current = current.next
  }
  //once list1 OR list2 is null
  //check if there are any values left in one or the other
  //set current.next to the rest of the remaining list(because other list is empty)
  if(list1){
    current.next = list1
  }
  if(list2){
    current.next = list2
  }
  //
  return result.next
};

//merge 2 sorted arrays
// var mergeTwoLists = function(list1, list2) {
//   let result = [];
//   let i = 0
//   let j = 0
//   while(i < list1.length || j < list2.length){
//       if(list1[i] <= list2[j]){
//           result.push(list1[i])
//           i++
//       }else{
//           result.push(list2[j])
//           j++
//       }
//   }
//   return result
// };