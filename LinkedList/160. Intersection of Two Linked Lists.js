/*
https://leetcode.com/problems/intersection-of-two-linked-lists/description/

In this question, we have to return value of the node which is an intersection between 2 linked lists.
*/

/*
The trick in this question is linked lists having different lengths.
It's easy to find the intersection if the linked lists had the same length.
But if they have different lengths, one would finish iterating before the other, 
and the common intersection would potentially never be found.

The solution very simple. We start at heads of both the linked lists. 
If one of list runs out, then its pointer becomes null. 
When it becomes null, we assign it to the head of the other link list.

The below solution has time complexity of O(m+n) and space complexity of (O(1)).
*/

let getIntersectionNode = function (headA, headB) {
  // Starting at the head
  let l1 = headA;
  let l2 = headB;

  // Loop continues until both pointers have same value.
  // So that means it will loop until intersection or null (end)
  while (l1 !== l2) {
    l1 = l1 ? l1.next : headB; // If l1 finished iterating, it is assigned the head of second linked list
    l2 = l2 ? l2.next : headA; // if l2 finished iterating, it is assigned the head of first linked list
  }
  // The above arrangement ensures the loop continues till we reach end of both linked lists or hit an intersection.

  // We return l1 (or l2). This can ne null or the intersection node.
  return l1;
};

/*
Here is a recursive solution as well. This is just for educational purposes. 
In this case, recursive solution has O(n) space complexity with no improvement in time complexity.
*/
let getIntersectionNodeRecursion = function (headA, headB) {
  function helper(l1, l2) {
    if (l1 === l2) {
      return l1;
    }

    l1 = l1 ? l1.next : headB;
    l2 = l2 ? l2.next : headA;

    return helper(l1, l2);
  }

  return helper(headA, headB);
};
