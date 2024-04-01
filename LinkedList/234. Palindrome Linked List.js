/*
https://leetcode.com/problems/palindrome-linked-list/description/

Given the head of a singly linked list, return true if it is a 
palindrome or false otherwise.
*/

/*
To solve this problem, we are going to use two pointer technique. 
The approach is simple, we want to find the middle of the linked list.
Once we find the middle, we will reverse the second half of the linked list.
Then we compare each element from beginning and end.

Basically, in an array you have access to first and last element so you can make easy comparisons. 
But with linked lists, we have to reverse the second half to get the same setup. 
*/

let isPalindrome = function (head) {
  // We create two pointers. Slow one will start the head and fast will start at the second element.
  let slow = head;
  let fast = head?.next;

  // First we need to find the middle of the linked list.
  // The slow pointer will be in the middle when fast pointer reaches the end.
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // Then we reverse the linked list starting from the next element after middle.
  let curr = slow.next;
  let prev = null;

  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Now we check values from each end. If at any case the value is not same, we return false.
  while (prev && head) {
    if (prev.val !== head.val) {
      return false;
    }

    prev = prev.next;
    head = head.next;
  }

  // Otherwise we return true.
  return true;
};
