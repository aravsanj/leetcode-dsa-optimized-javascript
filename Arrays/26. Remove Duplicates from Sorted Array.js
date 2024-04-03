/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

The question is simple. You have to remove duplicates from a sorted array.
But you've to do it in-place. Meaning you cannot create a new array or use map / set.
*/

/*
Here I am going to employ the the two pointer technique. 
One pointer will be slow and other will be fast and both will be moving in the same direction.
*/

let removeDuplicates = function (nums) {
  // Initializing slow pointer
  let slow = 0;
  // The fast pointer will be in the loop itself and increments in each iteration.
  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      // The slow pointer only increments if the values are not same.
      slow++;
      // We assign value at fast pointer to the slow pointer removing the duplicates.
      nums[slow] = nums[fast];
    }
  }

  // slow pointer (add 1) will be the length of the new array.
  return slow + 1;
};
