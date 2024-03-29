/* 
https://leetcode.com/problems/missing-number/

In this question we are provided an array and a range. 
The range is simply the length of the array.
All elements in the range are supposed be present in the array but it is not.
We have to find the missing number.

PS: All numbers in the array are unique.
*/

/* 
One simple approach is to find the sum of all numbers in the range and also numbers in the array.
The difference will be the missing number.
This approach has O(n) time complexity and O(1) space complexity in the best, worst, and avg cases.
*/

const missingNumber = function (nums) {
  let range = nums.length;
  let total = (range * (range + 1)) / 2;
  let sum = 0;

  for (const val of nums) {
    sum += val;
  }

  return total - sum;
};

/*
We can also use bitwise XOR operator instead. Although this approach is harder to understand and probably not very 
useful during interviews. Time and space complexity remains same.
*/

const missingNumberBitwise = function (nums) {
  let range = nums.length;
  let ans = 0;

  for (let i = 0; i < range; i++) {
    ans ^= nums[i] ^ i;
  }

  return ans ^ range;
};
