/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.
*/

/*
Since we need to solve this for O(n) time complexity and O(1) space complexity, we cannot use set / map or have more than one loop.

But we are given a sorted (increasing) array. And we have to find the elements that add upto the target. 

Here, we can take advantage of the two pointer technique.

The left pointer will start at 0.

The right pointer will start at the end.

Depending on the whether the sum is less than the target or greater than the target, we increment / decrement the pointers.

When the sum becomes equal to the target, the position is returned
*/

let twoSum = function (numbers, target) {
  // Initializing left and right pointers
  let length = numbers.length - 1;
  let left = 0;
  let right = length;

  // The loop will run until left and right pointer cross each other.
  while (left < right) {
    if (numbers[left] + numbers[right] < target) {
      // If the sum is less than target, we only increment the left pointer.
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      // Otherwise, we increment the right pointer.
      right--;
    } else {
      // else condition is run only when sum becomes equal to target.
      return [left + 1, right + 1];
    }
  }
};

// The above technique only works we have an array sorted in non-decreasing order.
// This question is an example of two pointer solution but the pointers are moving in opposite direction.
