/*
https://leetcode.com/problems/valid-anagram/description/

We are given 2 strings "s" and "t".
We need to find out if they're anagrams or not.

Note: An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/

/*
First we will write the most straight-forward javascript solution completely using internal methods.
While this works on LeetCode, we cannot really use it in an interview. Because this isn't testing much of our logical skills.

Essentially we are converting the strings to an array, then calling the internal sort method and joining it back for making a comparison.

Given the dominant factor is sort() method which is actually a merge sort, we have a time complexity of O(n*log(n)).
The space complexity will be O(n) for merge sort.
*/

const isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

/*
A better solution would be to use Map to keep track of the characters in each string.
Here we achieve O(n) time complexity and O(1) space complexity.
*/

const isAnagramUsingMap = function (s, t) {
  // If strings don't have same length, they're obviously not anagrams.
  if (s.length !== t.length) return false;

  // We create a new map
  const map = new Map();

  // We loop through the s string and a create map of characters (as keys) and their frequencies (as values).
  for (const val of s) {
    map.set(val, map.has(val) ? map.get(val) + 1 : 1);
  }

  // We loop through the t string and update the map of characters (as keys) and instead of adding, we subtract so we are getting rid of repeated characters.
  for (const val of t) {
    map.set(val, map.has(val) ? map.get(val) - 1 : -1);

    // Finally we delete the property if the frequency reaches zero.
    if (map.get(val) === 0) map.delete(val);
  }

  // If the map still has elements, then that means not all characters occurred in the same frequency in both the strings.
  // Hence we return false.
  if (map.size > 0) return false;

  // Otherwise we return true.
  return true;
};
