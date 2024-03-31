/*
https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

Given the head of a sorted linked list, delete all duplicates such that each element appears only once. 
Return the linked list sorted as well.
*/

/*
Since twe have a sorted linked list,the solution is very simple. 
We just need to check adjacent elements and change next pointers accordingly.
We have O(n) time complexity and O(1) space complexity. 
*/

const deleteDuplicates = function (head) {
  // Let current node be the head
  let curr = head;

  // The loop will continue until current and next element is not null
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      // If they are equal, skip the next node by pointing to node after next.
      curr.next = curr.next.next;
    } else {
      // If they are not equal, move to the next node
      curr = curr.next;
    }
  }
  // Finally return the LinkedList
  return head;
};

/*
Here is a recursive solution because, why not?
Here we get O(n) time and space complexity
*/

const deleteDuplicatesRecursion = function (head) {
  // We create helper function that calls recursively
  function helper(curr) {
    // Recursion stops if curr or next node is null and return the curr node
    if (!curr || !curr.next) return curr;

    // We are storing the return value from helper method as the next node
    curr.next = helper(curr.next);

    if (curr.val === curr.next.val) {
      // We are returning the next node if there is duplicate
      return curr.next;
    } else {
      // If there is no duplicate, we simply return the curr node itself
      return curr;
    }
  }

  // When base case is hit, whole linked list is returned
  return helper(head);
};
