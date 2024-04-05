/*
https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/

Find the largest sum of twins.

A twin is an element that positioned exactly the same but from the other end.

So last and first elements are twins.

Second last and second elements are twins.

You get the point.

We need to find maximum sum of twin elements and return it.
*/

/*
This can be solved through two pointer technique.

First we need to find the middle of the linked list.

Then we reverse the second half of the linked list.

Once we reverse it, we can traverse from both ends find sum of the twins. Of course, we keep track of the largest sums.
*/

let pairSum = function (head) {
  // Initializing two fast and slow pointers.
  let fast = head;
  let slow = head;

  // Slow pointer will be the middle element.
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // We are reversing the second half of linked list.
  let curr = slow;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Now we are going to add each element and also keep track of the largest sum.
  let largest = 0;
  let left = head;
  let right = prev;

  // The loop comes to an end when left or right becomes null.
  while (left && right) {
    let sum = left.val + right.val;
    largest = Math.max(largest, sum);
    left = left.next;
    right = right.next;
  }

  // Return largest.
  return largest;
};
