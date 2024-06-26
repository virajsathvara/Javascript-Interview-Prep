/**
 * Sliding Window: Best Time to Buy and Sell Stock - Leetcode 121
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.
 */

var maxProfit = function (prices) {
  let l = prices[0];
  let maxP = 0;
  const L = prices.length;
  for (let i = 0; i < L; i++) {
    if (prices[i] < l) {
      l = prices[i];
    } else if (prices[i] > l) {
      maxP = Math.max(prices[i] - l, maxP);
    }
  }
  return maxP;
};

const arr = [7, 1, 5, 3, 6, 4];
const arr1 = [1, 2, 4];

console.log(maxProfit(arr));
