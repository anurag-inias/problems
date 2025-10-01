# Buy and sell stocks I

!!! info "try"
    - index: 121
    - difficulty: easy
    - [Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description)

## Description

Given an array `prices` where `prices[i]` is the price of a given stock on $i^{th}$ day, maximize your profit by choosing a **single day** to buy one stock and a different day to sell that stock.

## Example

```
input  = [7, 1, 5, 3, 6, 4]
output = 5 (buy for $1 and sell for $6)


input  = [7, 6, 4, 3, 1]
output = 0 (can never make profit)
```

## Solution

??? "Approach"

    Maintain the `min` price seen so far, while traversing the list left to right. For each day, calculate the profit were you to sell the stock bought on the minimum price previously seen. 

    ??? "First iteration"

        5ms, beats 25.60%

        ```kotlin
        fun maxProfit(prices: IntArray): Int {
          var min = prices[0]
          var profit = 0

          for (i in 1 until prices.size) {
            profit = max(profit, prices[i] - min)
            min = min(min, prices[i])
          }

          return profit
        }
        ```

    ??? "Second iteration"

        3ms, beats 86.10%

        ```kotlin
        fun maxProfit(prices: IntArray): Int {
          var min = prices[0]
          var profit = 0

          for (i in 1 until prices.size) {
            if (prices[i] < min) {
              min = prices[i]
            } else {
              profit =  max(profit, prices[i] - min)
            }
          }

          return profit
        }
        ```

    ??? "Third iteration"

        2ms, beats 99.81%

        ```kotlin
        fun maxProfit(prices: IntArray): Int {
          var min = prices[0]
          var profit = 0

          for (i in 1 until prices.size) {
            if (prices[i] < min) {
              min = prices[i]
            } else if (prices[i] - min > profit) {
              profit =  prices[i] - min
            }
          }

          return profit
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(maxProfit(intArrayOf(7, 1, 5, 3, 6, 4)))
    .isEqualTo(5)
}

@Test
fun second() {
  assertThat(maxProfit(intArrayOf(7, 6, 4, 3, 1)))
    .isEqualTo(0)
}
```



