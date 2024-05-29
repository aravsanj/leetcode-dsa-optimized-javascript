/*
https://leetcode.com/problems/find-smallest-letter-greater-than-target/


You are given an array of characters letters that is sorted in non-decreasing order, and a character target. There are at least two different characters in letters.

Return the smallest character in letters that is lexicographically greater than target. If such a character does not exist, return the first character in letters.
*/

/*
The question is easily solved using binary search. We have to keep track of the index that satisfies the condition and let binary search continue to run.
When the search is complete, firstTrueIndex will automatically have the correct index.

Time: O(log(n))
Space: O(1)
*/

let nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  let firstTrueIndex = 0;

  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);

    if (letters[midIndex] > target) {
      firstTrueIndex = midIndex;
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  return letters[firstTrueIndex];
};
