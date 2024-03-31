/*
https://leetcode.com/problems/remove-linked-list-elements/

Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
*/

/*
We will follow a simple approach to solve this problem.
We will create a dummy node that would appear in the left most end of the linked list pointing towards head.
Then we will simply iterate from there till we hit null. 
Each time we encounter the given value, we change the next pointer 2 elements forward.
Otherwise, we will iterate 1 element forward.
Finally we return dummy.next to return the head element.

Time complexity - O(n)
Space complexity - O(1)
*/

let removeElements = function (head, val) {
  const dummy = new ListNode(0, head);
  let curr = dummy;
  while (curr.next !== null) {
    if (curr.next.val === val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return dummy.next;
};

/*
Recursive solution - to be written soon
*/
