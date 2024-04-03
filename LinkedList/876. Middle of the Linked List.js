/*
https://leetcode.com/problems/middle-of-the-linked-list/description/

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.
*/

/*
Unlike an array, we cannot know the size of the linked list.
Here again we can use two pointer technique.
The slow pointer one steps forward while the past pointer moves two steps forward.
The slow pointer would be in middle when the fast pointer reaches end.

Time complexity - O(n)
Space complexity - O(1)
*/

let middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

/*
Here is the above iterative method translated to a recursive version. 
This is a less efficient solution with additional space complexity.

Time complexity - O(n)
Space complexity - O(n)
*/

let middleNodeRecursion = function (head) {
  function helper(slow = head, fast = head) {
    if (!fast || !fast.next) return slow;

    return helper(slow.next, fast.next.next);
  }

  return helper();
};
