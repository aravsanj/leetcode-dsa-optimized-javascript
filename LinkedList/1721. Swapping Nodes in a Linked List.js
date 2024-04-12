/*
https://leetcode.com/problems/swapping-nodes-in-a-linked-list/

You are given the head of a linked list, and an integer k.

Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).
*/

/*
Here we can use the 2 pointers pattern to solve the problem.

Just note that we have to save the reference to the kth element from start so that we can exchange the value with kth element from end.

Time complexity: O(n)
Space complexity: O(1);
*/

let swapNodes = function (head, k) {
  // Declaring fast and slow node
  let fast = head;
  let slow = head;

  // Moving fast node k elements forward
  for (let i = 1; i < k; i++) {
    fast = fast.next;
  }

  // Saving that point as pointA
  let pointA = fast;

  // Now we iterate both fast and slow pointer till fast hits the last element. So slow will be the kth element from the end.
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Now we carry out a value slap
  let temp = slow.val;
  slow.val = pointA.val;
  pointA.val = temp;

  // And return the head
  return head;
};
