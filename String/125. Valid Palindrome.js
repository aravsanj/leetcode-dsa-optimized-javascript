/*
https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
it reads the same forward and backward. Alphanumeric characters include letters and numbers.
*/

/*
We have to find if the string is palindrome. But we have to ignore all characters that are not alpha-numeric.

So first we create a regex that checks if the given character is alpha-numeric.

Then we utilize the two pointers technique.

The left pointer starts at beginning of the string while the right pointer starts at the end.

We ignore all characters that are not alpha-numeric and simply update their pointers instead.

Time complexity - O(n)
Space complexity - O(1)
*/

let isPalindrome = function (s) {
  // Regex to check if a character is alpha-numeric.
  let isAlphaNumeric = /^[a-zA-Z0-9]*$/;

  // Initializing the pointers
  let left = 0;
  let right = s.length - 1;

  // The loop will run until each pointer crosses each other
  while (left < right) {
    // First we check if both characters are alpha-numeric
    if (
      isAlphaNumeric.test(s.charAt(left)) &&
      isAlphaNumeric.test(s.charAt(right))
    ) {
      // Then we check if they're equal. If they aren't, we return false.
      if (s.charAt(left).toLowerCase() !== s.charAt(right).toLowerCase()) {
        return false;
      }

      // We increment both the pointers and continue to next iteration.
      left++;
      right--;
      continue;
    }

    // If the iteration reaches here, that means either one or both the characters are non-alphanumeric.
    // We test both of them and move the pointer accordingly to ignore them.
    if (!isAlphaNumeric.test(s[right])) {
      right--;
    }

    if (!isAlphaNumeric.test(s[left])) {
      left++;
    }
  }

  // If we make it out of the while loop, the string was, in fact, a palindrome.
  return true;
};
