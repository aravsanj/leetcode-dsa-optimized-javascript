/*
https://leetcode.com/problems/linked-list-cycle/description/

In this question we need to find out whether LinkedList contains a cycle.
Ie; if we keep following the next pointer, we should eventually return to a node we already visited.
*/

/*
First we will go through the straight-forward solution.
Here we create a new set and simply add nodes to the new set as we loop over.
We can check if there is a cycle by checking if the node is already present in the set.

This solution has O(n) time complexity and O(n) space complexity (since we are creating a new set).
*/

let hasCycle = function (head) {
  const set = new Set();
  let curr = head;
  while (curr?.next) {
    curr = curr.next;

    if (set.has(curr)) {
      return true;
    }
    set.add(curr);
  }

  return false;
};

/*
We can further improve the space complexity by using the two pointer technique.
Here we employ 2 pointers. One moves faster than the other.
If there is a cycle, the faster pointer would eventually collide with the slower pointer.

With this technique, we can avoid adding extra memory.
So time complexity is O(n) while space complexity is O(1).
*/

let hasCycleTwoPointer = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }
  return false;
};
