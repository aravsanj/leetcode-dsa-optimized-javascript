/*
https://leetcode.com/problems/find-pivot-index/description/

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/

/*
To solve this problem, we first find the sum of the whole array.

Then we remove element from the sum as we iterate from end of the array.

The elements being removed are also added to keep track of the new sum.

We can compare the sums to find the pivot point.

We have to make comparisons from right to left because of one edge case. In the question, the sum of elements to left of array is considered zero.

Time complexity: O(n)
Space complexity: O(1)
*/

let pivotIndex = function (nums) {
  // Left and right pointers
  let leftPrefix = 0;
  let rightPrefix = 0;

  // Finding the total sum
  for (let i = 0; i < nums.length; i++) {
    leftPrefix += nums[i];
  }

  // Assigning it to right prefix and resetting the left prefix
  rightPrefix = leftPrefix;
  leftPrefix = 0;

  // We are taking away elements from right prefix and also adding them to the left  prefix. If there is a match, we return the index.
  for (let i = 0; i < nums.length; i++) {
    rightPrefix -= nums[i];
    if (leftPrefix === rightPrefix) {
      return i;
    }
    leftPrefix += nums[i];
  }

  // Else we return -1
  return -1;
};
