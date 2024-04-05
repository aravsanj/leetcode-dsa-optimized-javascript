/*
https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

Given the head of a linked list, remove the nth node from the end of the list and return its head.
*/

/*
In the question, we need to remove nth element from the back. 
Since it's a linked list, we cannot iterate from the back. 
So we have to find a away to find the nth element by iterating from the front itself.
We can do that using two pointer technique.
*/

let removeNthFromEnd = function (head, n) {
  // We create a dummy node to handle a lot of the edge cases easier.
  const dummy = new ListNode(0, head);

  // Creating fast and slow pointers.
  let fast = dummy;
  let slow = dummy;

  // We move fast pointer n elements forward.
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  // Then we move both pointers until fast pointer reaches the last element.
  // Since fast pointer had a head start of "n" (from dummy), slow pointer will be exactly at the (n-1)th element.
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  // Simply reassigning the next reference to remove nth element from linked list.
  slow.next = slow.next.next;

  return dummy.next;
};
