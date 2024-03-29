/*
https://leetcode.com/problems/contains-duplicate/

This is a very simply question. 
We just need to check if an array contains duplicate elements.
Return true if it does or false if it doesn't.
*/

/*
First I will write the unoptimized solution. 
We are simply taking each element and comparing it with every other element.
Here we have O(n^2) time complexity (nested loops) and O(1) space complexity (no additional memory).
Although this solution works, it might not be accepted in LeetCode because of the time limit.
*/

let containsDuplicate = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
};

/* 
To improve time complexity, we can use a map or a set and cut down the inner loop.
So we use map or a set to keep track of elements we already looped over and check if they are coming again.
Here time and space complexity will be both O(n).
*/

let containsDuplicateUsingMap = function (nums) {
  const map = new Map();

  for (const value of nums) {
    if (map.has(value)) {
      return true;
    }

    map.set(value, true);
  }

  return false;
};

// Pretty much same thing can be accomplished using set

let containsDuplicateUsingSet = function (nums) {
  const seen = new Set();
  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
};

/*
 Here is a even more neat trick.
 We can take advantage of the fact that set can only have unique elements.
 And compare the set size with array length.

 Both time and space complexity remains O(n). 
 Since internally we are still iterating through the array to create the set.
 */

let containsDuplicateUsingSetSize = function (nums) {
  const unique = new Set(nums);

  return unique.size !== nums.length;
};

/* 
Fundamentally, the trade-off here is between time and space complexity.
While the first solution had O(n^2) time complexity, it had O(1) space complexity.
Every other solution has O(n) time and space complexity.
*/
