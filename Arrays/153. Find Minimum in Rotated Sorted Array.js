/*
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description


Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.
*/

/*
We have to solve it for O(log n) time complexity. Since we have sorted elements (although rotated), we can still use binary search.

The idea is to pick the middle element and compare it with the last element.

Since the array is rotated, if the middle element happens to be bigger than the end element, we know the smallest element is in right half.

Else, it is in the left half.

In the end left pointer will have the minimum element because as soon as left crosses right, the loop breaks.

Time complexity: O(log n)
Space complexity: O(n)
*/

const findMin = function (nums) {
  // Initializing left an right pointers
  let left = 0;
  let right = nums.length - 1;

  // We loop until left is less than right
  while (left < right) {
    // Finding the middle index
    let midIndex = Math.floor((left + right) / 2);

    // We check if the current element is greater then end element. If it is, we change left pointer.
    if (nums[midIndex] > nums[right]) {
      left = midIndex + 1;
    } else {
      // Otherwise we change right pointer
      right = midIndex;
    }
  }

  // The we return left which will have the smallest element
  return nums[left];
};
