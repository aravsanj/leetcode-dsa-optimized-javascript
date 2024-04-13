/*
https://leetcode.com/problems/longest-substring-without-repeating-characters/

Given a string s, find the length of the longest substring without repeating characters.
*/

/*
Since we are required to find the longest substring, it is an indication to use sliding window.

But we cannot have repeating characters in the substring.

So we use a set to keep track of visited characters.

Time complexity: O(n^2)
Space complexity: O(n)
*/

let lengthOfLongestSubstring = function (s) {
  // Variable to keep track of max length; Set for tracking visited characters; i and j are the two pointers.
  let maxLength = 0;
  let set = new Set();
  let i = 0,
    j = 0;

  // i pointer leads the traversal. So loop continues until it reaches end.
  while (i < s.length) {
    // We increment left pointer j until an existing character in the set is deleted. This make sure to resize the window when encounter repeating characters.
    while (set.has(s[i])) {
      set.delete(s[j]);
      j++;
    }

    // Adding visited character to set.
    set.add(s[i]);

    // Reassigning maximum length if it needs to be.
    maxLength = Math.max(maxLength, i - j + 1);

    // Increment right pointer i;
    i++;
  }

  // Return maximum length.
  return maxLength;
};
