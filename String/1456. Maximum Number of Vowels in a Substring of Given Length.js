/*
https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
*/

/*
Since we are given a specific size "k", that is indicative of the sliding window technique.

The approach here is simple.

First, we store vowels in an array.

Then we iterate over the first window, and find the vowel count there and assign it as the maximum.

Then we iterate over rest of the string. We will increment windowCount if the vowel enters the window.

Respectively, we decrement the window count if a vowel leaves window.

largestCount is reassigned if needed.

Finally we return the largestCount.

Time complexity: O(n)
Space complexity: O(1)
*/

let maxVowels = function (s, k) {
  let vowels = ["a", "e", "i", "o", "u"];
  let largestCount = 0;
  let windowCount = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) {
      windowCount++;
    }
  }

  largestCount = windowCount;

  for (let i = k; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      windowCount++;
    }

    if (vowels.includes(s[i - k])) {
      windowCount--;
    }
    largestCount = Math.max(windowCount, largestCount);
  }

  return largestCount;
};
