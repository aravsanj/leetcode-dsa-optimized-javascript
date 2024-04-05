/*
https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/

You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, 
where ⌊x⌋ denotes the largest integer less than or equal to x.
*/

/*
This is yet another classic problem. We need to find the middle element and delete it.

To delete the middle element, we use slow and fast pointer technique. 

One thing to notice is that index actually starts at 0. 

To make it simple, we create a dummy node that points to head. 

We start the fast pointer at head and slow at the dummy. This helps adjust for the zero-based indexing.

Rest of the code should be self-explanatory.

Time complexity - O(n)
Space complexity - O(1)
*/

const deleteMiddle = function (head) {
  const dummy = new ListNode(0, head);

  let fast = head;
  let slow = dummy;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummy.next;
};
