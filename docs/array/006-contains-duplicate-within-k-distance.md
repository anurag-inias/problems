# Contains duplicate within k distance

!!! info "try"
    - index: 219
    - difficulty: easy
    - [Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii/description/)

## Description

Given an array of integers `nums` and an integer `k`, find if there exists indices `i` and `j` such that:

1. $a_i = a_j$.
2. and $|i - j| \le k$.

## Example

```
     input  = [1, 2, 3, 1, 4, 5]  k = 3 
     output = true
explanation = 1 is present at index $0$ and $3$
```

## Solution

??? "Approach 1"

    `seen` map

    ??? "Pseudocode"

        1. Iterate over the all the elements $e$ at index $i$.
        2. Check if the key $e$ exists in the `seen` map:
           - If found, see if $i - \text{seen}[e] \le k$, we have found our duplicate.
        3. add it to `seen` map $\text{seen}[e] = i$

    ??? "Implementation"

        31ms beats 89.95%

        ```kotlin
        fun containsNearbyDuplicate3(nums: IntArray, k: Int): Boolean {
          val seen = HashMap<Int, Int>(nums.size)

          for ((i, n) in nums.withIndex()) {
            val j = seen[n] ?: -1
            if (j >= 0 && i - j <= k) return true
            seen[n] = i
          }

          return false
        }
        ```

??? "Approach 2"

    Sliding window.

    ??? "Pseudocode"

        Start a sliding window and keep expanding it until we hit $k$ length.
        After this, before adding any element, remove the front of the sliding window.

    ??? "Implementation"

        ```kotlin
        fun containsNearbyDuplicate(nums: IntArray, k: Int): Boolean {
          val seen = mutableSetOf<Int>()
          val window = LinkedList<Int>()

          for (n in nums) {
            if (window.size <= k) {
              if (n in seen) return true
              seen += n
              window.offerLast(n)
            } else {
              seen -= window.removeFirst()
              if (n in seen) return true
              seen += n
              window.offerLast(n)
            }
          }

          return false
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(minMoves(intArrayOf(4, 7, 19, 16), 3)).isEqualTo(10)
}

@Test
fun second() {
  assertThat(minMoves(intArrayOf(4, 4, 4, 4), 3)).isEqualTo(0)
}

@Test
fun third() {
  assertThat(minMoves(intArrayOf(4, 2, 6, 8), 3)).isEqualTo(-1)
}
```



