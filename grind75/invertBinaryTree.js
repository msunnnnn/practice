"use strict";

//Nov 3, 2022

//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
  //  *     this.val = (val===undefined ? 0 : val)
  //  *     this.left = (left===undefined ? null : left)
  //  *     this.right = (right===undefined ? null : right)
  //  * }
  
  //given the root of a tree
  //swap the left/right 

  //base case -> is there a root value?
  // swap left and right
  // call function on node.left and node.right
  // return the root to return the whole tree

  function invertTree(root){

    if(!root){
      return root
    }
    let temp = root.left
    root.left =  root.right
    root.right = temp

    invertTree(root.left)
    invertTree(root.right)

    return root
}