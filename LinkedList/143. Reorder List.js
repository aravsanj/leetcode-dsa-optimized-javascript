/*
https://leetcode.com/problems/reorder-list/description/

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
*/

/*
The way to solve this problem is to find the middle using two pointer technique.

Once we find the middle, we can reverse second half of the list.

Once it is reversed, we just have to merge these too lists to get the reordered list.
*/

let reorderList = function (head) {
  // Declaring slow and fast pointer
  let slow = head;
  let fast = head;

  // Slow pointer will be at the middle when fast pointer reaches end.
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // We will assign (middle + 1)th element as the current node.
  let curr = slow.next;

  // Cutting off reference to second half of the original linked list. Now we have two linked lists.
  slow.next = null;

  // Reversing the second linked list. Note that we are using "slow" as the previous element.
  // So, once reversed, the linked list will be stitched back. But second half will be pointing in opposite direction.
  while (curr) {
    let temp = curr.next;
    curr.next = slow;
    slow = curr;
    curr = temp;
  }

  // Now we merge these alternatively.
  // The left pointer will start at the head and right will start at slow (which is middle).
  let left = head;
  let right = slow;

  // We are taking right elements and joining it with the the left one.
  // So, the loop continues until there is no elements in the right side.
  while (right.next) {
    // First we need store the next elements from the left side to a temp variable
    let temp = left.next;
    // Then we change next reference to point it to the element at right (alternative merging start)
    left.next = right;
    // We move  the right element forward.
    right = right.next;
    // Then we assign temp as the next element of "right". Here left.next is right (alternative merging end)
    left.next.next = temp;
    // Now we move left two pointers forward (since there is the alternative element in between)
    left = left.next.next;
  }
};
