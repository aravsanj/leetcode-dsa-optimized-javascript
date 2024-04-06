/*
https://leetcode.com/problems/max-number-of-k-sum-pairs/

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

Return the maximum number of operations you can perform on the array.
*/

let maxOperations = function (nums, k) {
  // First we sort the array.
  nums.sort((a, b) => a - b);

  // Initializing left and right pointers.
  let left = 0;
  let right = nums.length - 1;
  let ops = 0;

  // While left is than right, the loop continues.
  while (left < right) {
    let sum = nums[left] + nums[right];

    // If the sum is equal, we increase ops and move both pointers.
    if (sum === k) {
      ops++;
      left++;
      right--;
    } else if (sum > k) {
      // We only need to decrease right pointer if sum is greater than k.
      right--;
    } else {
      // Otherwise we increase left pointer.
      left++;
    }
  }

  // Return ops.
  return ops;
};
