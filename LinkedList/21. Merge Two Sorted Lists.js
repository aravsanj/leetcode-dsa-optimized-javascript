/*
https://leetcode.com/problems/merge-two-sorted-lists/description/

In this question we are given the heads of two sorted LinkedLists. 
We have to merge the sorted lists and return the head of the sorted merge list.
We are also given the ListNode class which is used to created the list nodes.
*/

/*
Our first approach is to use a dummy node and a while loop. 
Since the problem requires us to return the head of the merged list, it is convenient to use a dummy node to keep track of it.
The solution has O(n) time complexity and O(1) space complexity.
*/

// PS: list1 and list2 are head nodes.
const mergeTwoLists = function (list1, list2) {
  // Create a dummy node -Infinity value virtually making it the left most element.
  const dummy = new ListNode(-Infinity);
  // The prev pointer is used to keep track of the last node. We first assign dummy as the last/previous node.
  let prev = dummy;

  // The loop will continue until list1 or list2 is emptied out.
  while (list1 && list2) {
    // If the list1 val is less than or equal to list2 val, we attach list1 as the next value of prev pointer.
    // Then we change the prev pointer to list1.
    // Then we iterate forward by going to next list1 element.
    // We pretty much do the same for list2 in the else condition
    if (list1.val <= list2.val) {
      prev.next = list1;
      prev = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      prev = list2;
      list2 = list2.next;
    }
  }

  // In case list1 and list2 is not equal, the while loop will run out early. So we attach rest of the list.
  if (!list1) prev.next = list2;
  if (!list2) prev.next = list1;

  // Finally we return the head node.
  return dummy.next;
};

/*
We can also solve this through a recursive approach. This offers a more concise code.
Here recursion actually causes O(m+n) time and space complexity. 
*/

let mergeTwoListsRecursion = function (list1, list2) {
  // First we define the base case. If list1 or list2 comes to an end, we return the other list.
  if (!list1) return list2;
  if (!list2) return list1;

  // If the list1 value is smaller or equal, we call the function again for the next value of list1
  if (list1.val <= list2.val) {
    // Since we are passing list1.next, eventually list1 base case will become true (if list1 is smaller or equal)
    // and list 2 gets returned which gets attached to list1.
    list1.next = mergeTwoListsRecursion(list1.next, list2);
    // And we return list1 which would head of the merged list
    return list1;
  }
  // The else setup works the same way.
  else {
    list2.next = mergeTwoListsRecursion(list1, list2.next);
    return list2;
  }
};
