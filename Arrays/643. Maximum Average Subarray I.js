/*
https://leetcode.com/problems/maximum-average-subarray-i/description/

You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.
*/

/*
This is a classic problem that can be solved using the sliding window technique. This helps us avoid additional loops.

We will keep window of size "k" and find the sum inside the window. We will keep track of the largest sum and eventually return the average.

Time complexity = O(n);
Space complexity = O(1);
*/

const findMaxAverage = function (nums, k) {
  // Initializing variables to keep largest sum and window sum.
  let largestSum = 0;
  let windowSum = 0;

  // Calculating the value of the first window.
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  // For now it is our largest sum.
  largestSum = windowSum;

  // Now we slide window through the array till we hit the end. Each time we are calculating the sum of the window and replacing largest sum if needed.
  for (let j = k; j < nums.length; j++) {
    // Adding the element that is entering the window.
    windowSum += nums[j];
    // Removing the element that is leaving the window.
    windowSum -= nums[j - k];
    // We replace largest sum if necessary.
    largestSum = Math.max(largestSum, windowSum);
  }

  // Returning the average
  return largestSum / k;
};
