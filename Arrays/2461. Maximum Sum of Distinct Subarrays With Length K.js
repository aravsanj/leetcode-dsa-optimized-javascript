/*
https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/description/


You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

- The length of the subarray is k, and
- All the elements of the subarray are distinct.
- Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

A subarray is a contiguous non-empty sequence of elements within an array
*/

/*
This is a tougher than usual question especially if you're new to "sliding window technique". 

We need to find the max sum in a subarray of given length while simultaneously needing the subarray to be having only unique elements. 

For that we will take "window" of length k and do 3 things:

1. Check if all elements are unique.
2. Finds its sum.
3. Check if sum is greater than previous sum and swap accordingly.

Time complexity - O(n)
Space complexity - O(k)
*/

let maximumSubarraySum = function (nums, k) {
  // Initialize variables to store sum of the window, largest sum, and map to keep track of the count of elements in each subarray.
  let windowSum = 0;
  let largest;
  let counter = new Map();

  // First we find the sum of the first window / subarray.
  for (let i = 0; i < k; i++) {
    // We are keeping track of the frequency of each element.
    counter.set(nums[i], counter.get(nums[i]) ? counter.get(nums[i]) + 1 : 1);
    windowSum += nums[i];
  }

  // counter's size and k will be the same if all elements are unique
  if (counter.size !== k) {
    // If its not the same, we assign 0 to largest since it wasn't a valid subarray.
    largest = 0;
  } else {
    // Otherwise we assign the window's sum as the largest.
    largest = windowSum;
  }

  // Now we loop over rest of the elements.
  for (let i = k; i < nums.length; i++) {
    // Again we are keeping track of the frequency.
    counter.set(nums[i], counter.get(nums[i]) ? counter.get(nums[i]) + 1 : 1);
    // And adding next elements to the window's sum
    windowSum += nums[i];

    // Since window / subarray length is "k", we need to remove the previous count and element from the window sum.
    // Here i - k is the element that is on the left (outside) of the window. We reduce 1 to find the previous count. Since we are removing that element from the window's sum.
    let prevCount = counter.get(nums[i - k]) - 1;
    counter.set(nums[i - k], prevCount); // Setting the new count.
    windowSum -= nums[i - k]; // Removing [i - k]th (left of the window) element as mentioned earlier.

    // Incase that element's count reached zero, we can delete it because we no more have that element in the window / subarray.
    if (prevCount === 0) {
      counter.delete(nums[i - k]);
    }

    // If the size of counter is same as k, then all elements were unique and we can swap the largest value if max condition is met.
    if (counter.size === k) {
      largest = Math.max(largest, windowSum);
    }
  }

  // Return the largest.
  return largest;
};
