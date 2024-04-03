/*
https://leetcode.com/problems/move-zeroes/description/

Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

/*
We can use the two pointer technique.
We will use a fast pointer and a slow pointer. The fast pointer will move forward in every iteration.
The slow pointer will move forward only if fast pointer hits a number that is not zero.
So whenever fast pointer hits zero, slow will be on hold. 
Then we swap whenever fast pointer is not in zero. 
Eventually this will cause all zero values to shifted to the right.
*/

let moveZeroes = function (nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
    }
  }
  return nums;
};
