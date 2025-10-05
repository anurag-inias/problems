# Equilibrium Index

!!! info "try"
    - index: 724
    - difficulty: easy
    - [Find Pivot Index](https://leetcode.com/problems/find-pivot-index/description/)


## Description

Given an array of integers, find the **equilibrium** index. It's the index such that the sum of elements to its left is same as sum of elements to its right.

## Example

```
Input: [1, 2, 0, 3]
              ^
Output: 2

Input: [1, 1, 1, 1]
Output: -1

Input: [-7, 1, 5, 2, -4, 3, 0]
                  ^
Output: 3
```

## Solution

??? "First approach"

    Use prefix and suffix sum arrays. This will take at least two passes on the array and $O(n)$ space.

??? "Second approach"

    Think back to why we needed to store the prefix and/or suffix array as auxiliary? That's because we can maintain a running variable to track suffix sum and then we would not know what the prefix sum was for any given element at index $i$.

    **Actually we don't need to save prefix sum, we know the sum of the whole array.**

    Let $S_l$ be the sum of elements left the equilibrium element $e$ and let $S_r$ be the sum of elements to its right. Let $S$ be the sum of the whole array.

    $$
    \begin{align}
    S_l + e + S_r &= S \\
    S_r &= S - e - S_l
    \end{align}
    $$

    and we are looking for an element where $S_l = S_r$.

    ??? "Implementation"

        ```kotlin
        fun findEquilibrium(nums: IntArray): Int {
          val total = nums.sum()
          var sumOnLeft = 0

          for (i in nums.indices) {
            val sumOnRight = total - nums[i] - sumOnLeft
            if (sumOnRight == sumOnLeft) return i
            sumOnLeft += nums[i]
          }

          return -1
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(findEquilibrium(intArrayOf(1, 2, 0, 3)))
    .isEqualTo(2)
}

@Test
fun second() {
  assertThat(findEquilibrium(intArrayOf(1, 1, 1, 1)))
    .isEqualTo(-1)
}

@Test
fun third() {
  assertThat(findEquilibrium(intArrayOf(-7, 1, 5, 2, -4, 3, 0)))
    .isEqualTo(3)
}
```



