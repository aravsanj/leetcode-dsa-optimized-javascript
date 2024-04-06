/*
https://leetcode.com/problems/container-with-most-water/

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.
*/

/*
We have to solve this problem in O(n) time complexity, otherwise we will get TLE error. 

To avoid a second loop, we can use the two pointer technique.

One pointer will iterate from start while the other will iterate from the end.

Area = Distance * Height

The trick is to freeze the pointer that has the greater height and let the other one move and calculate the area.

Time complexity: O(n)
Space complexity: O(1)
*/

let maxArea = function (height) {
  // Keeping track of largest area
  let largestArea = 0;
  let length = height.length;

  // Initializing pointers
  let left = 0;
  let right = length - 1;

  // Loop will continue until left and right cross each other.
  while (left < right) {
    // Since water cannot overflow, we can only take smaller of the two heights.
    let smallest = Math.min(height[left], height[right]);
    // Distance is simply the difference b/w the two pointers.
    let distance = right - left;
    // Multiplying smallest height with distance to get the area where water can be filled.
    let area = distance * smallest;
    // Reassigning largest area if needed.
    largestArea = Math.max(area, largestArea);

    // We only move forward the pointer of the smaller height.
    // Since we are looking for area containing most water, only largest height matters.
    if (height[left] === smallest) {
      left++;
    } else {
      right--;
    }
  }

  return largestArea;
};
