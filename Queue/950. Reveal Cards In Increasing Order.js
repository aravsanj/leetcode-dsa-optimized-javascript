/*
https://leetcode.com/problems/reveal-cards-in-increasing-order/description/


You are given an integer array deck. There is a deck of cards where every card has a unique integer. The integer on the ith card is deck[i].

You can order the deck in any order you want. Initially, all the cards start face down (unrevealed) in one deck.

You will do the following steps repeatedly until all cards are revealed:

Take the top card of the deck, reveal it, and take it out of the deck.
If there are still cards in the deck then put the next top card of the deck at the bottom of the deck.
If there are still unrevealed cards, go back to step 1. Otherwise, stop.
Return an ordering of the deck that would reveal the cards in increasing order.

Note that the first entry in the answer is considered to be the top of the deck.
*/

/*
To solve this, we will use a double-ended queue.

We will first sort the array in non-increasing order.

Then we will simulate movement of the cards inside the queue with unshift and pop operation.

Time complexity: O(n)
Space complexity: O(1)
*/

const deckRevealedIncreasing = function (deck) {
  // Sort in non-increasing order
  deck.sort((a, b) => b - a);

  // Initializing array for the double-ended queue.
  let deque = [];

  // Looping through the whole deck.
  for (let card of deck) {
    // If deque actually has elements, it will pop the last element and place it on top.
    if (deque.length > 0) {
      deque.unshift(deque.pop());
    }

    // Then we insert the new element.
    deque.unshift(card);
  }

  // Let's return the result.
  return deque;
};
