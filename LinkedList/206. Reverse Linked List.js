/*
https://leetcode.com/problems/reverse-linked-list/

Given the head of a singly linked list, reverse the list, and return the reversed list.
*/

/*
This can be solved by using the two pointer technique.
We will have a curr pointer starting at head and prev pointer starting at null.
We will store the upcoming nodes in a temp variable and then change next value of curr node to prev node.
We then move prev node to curr node.
Promptly, temp variable used to move the curr node forward.

Time - O(n)
Space - O(1)
*/

let reverseList = function (head) {
  let curr = head;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

/*
We can also implement a recursive solution. 
Here we use a helper function recursively call itself till curr or next node is null.
Then we start returning elements, we are essentially returning them in reverse order.

The whole reversing takes place because we are assigning curr node as the next node of the actual next node (yes, confusing).
It is important to make the actual next node null to avoid cycle.

Time - O(n)
Space - O(n)
*/

let reverseListRecursion = function (head) {
  function helper(curr) {
    if (!curr || !curr.next) return curr;

    const newHead = helper(curr.next);
    curr.next.next = curr;
    curr.next = null;
    return newHead;
  }

  head = helper(head);
  return head;
};
