/*
https://leetcode.com/problems/odd-even-linked-list/description/


Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
*/

/*
Since we have to do this in O(n) time complexity and O(1) space complexity, we have to use two pointers.

One pointer will be traversing odd numbers while other will be traversing even numbers.

Both will for its own list. So there will be an odd numbers list and an even numbers list.

Then we merge them and return the head.
*/

let oddEvenList = function (head) {
  // If there is no head, return null.
  if (!head) return null;

  // Assigning odd and even pointers as well as keeping rack of even list's head.
  let odd = head;
  let even = head.next;
  let evenHead = head.next;

  // Since even pointer is leading the traversal till it hits the end, we only need to check the even pointer her.
  while (even && even.next) {
    // Since odd will come after even
    odd.next = even.next;
    odd = odd.next;
    // And vice versa
    even.next = odd.next;
    even = even.next;
  }

  // Attaching the odd list to the even list. This is why we needed to keep track of even list's head;
  odd.next = evenHead;

  // Return the head.
  return head;
};
