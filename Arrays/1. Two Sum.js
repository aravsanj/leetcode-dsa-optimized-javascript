/*
https://leetcode.com/problems/two-sum/description/

 Here we have an array "nums" and a "target" integer.
 We simply need to return the indices of two array elements that adds up to the target integer.
 There is only one solution and we cannot add the same element twice.
 PS: There is always a solution.


Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

*/

/*
I wil write the unoptimized solution first. 
This solution has O(n^2) time complexity as there are 2 nested for loops.
Here we are adding each element of the array with every other element and returning the index if there is a match.
*/

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

/*
Now I will write a more optimized solution where we will be using only one for loop.
Hence we get O(n) time complexity.
To achieve that, we will use an object "table" to keep track of elements we have already looped over.
And see if any of them adds up to the target over the next iterations in the same loop.
*/

let twoSumOptimized = function (nums, target) {
  // initializing an empty object
  let table = {};

  // We are calling entries() to get [key, value] pair from the array.
  // key = index for arrays.
  for (let [index, value] of nums.entries()) {
    // We are checking if the value is already in the table, if so we are returning the indices.
    if (value in table) {
      return [table[value], index];
    }

    // If the value is not there, we are simply creating new property with key 'target - value' and value as the actual index.
    // We do this so that we create a key that adds upto the target for a future value.
    // So in the above if statement when we are checking for value in the next iterations and it becomes true
    // That means, these two elements add back to the target and hence we return the indices.
    table[target - value] = index;
  }
};

console.log(twoSumOptimized([2, 7, 11, 15], 9));
