/*
https://leetcode.com/problems/find-the-highest-altitude/description

There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.
*/

/*
Here we simply have to find the highest sum in the array between two points.

For that we can use prefix sum technique.

Basically we use two variables, one for prefixSum and other for the largest sum.

We let prefixSum accumulate the total through the array.

We keep track of largest sums in the sum variable.

Eventually when the loop is over, the true largest value will be in the largest variable which we return.
*/

let largestAltitude = function (gain) {
  let prefixSum = 0;
  let largest = 0;

  for (let i = 0; i < gain.length; i++) {
    prefixSum += gain[i];
    largest = Math.max(largest, prefixSum);
  }

  return largest;
};
