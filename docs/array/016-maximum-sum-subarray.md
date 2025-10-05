# Maximum sum subarray

!!! info "try"
    - index: 53
    - difficulty: medium
    - [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)


## Description

Given an integer array, find the subarray with the largest sum.

## Example

```
Input: [2, 3, -8, 7, -1, 2, 3]
Output: 11
Explanation: The subarray [7, -1, 2, 3] has the largest sum 11.

Input: [-2, -4]
Output: -2
Explanation: The subarray [-2] has the largest sum -2.

Input: [5, 4, 1, 7, 8]
Output: 25
Explanation: The subarray [5, 4, 1, 7, 8] has the largest sum 25.
```

## Solution

??? "Approach"

    Use Kadane's algorithm

    ??? "Just sum"

        ```kotlin
        fun maxSubArray(nums: IntArray): Int {
          var current = nums[0]
          var solution = nums[0]

          for (i in 1 until nums.size) {
            current = max(current + nums[i], nums[i])
            solution = max(current, solution)
          }

          return solution
        }
        ```

    ??? "Actual subarray"

        ```kotlin
        fun maxSubArray(nums: IntArray): IntArray {
          var current = 0..0
          var currentSum = nums[0]

          var solution = 0..0
          var solutionSum = nums[0]

          for (i in 1 until nums.size) {
            if (currentSum + nums[i] > nums[i]) {
              current = current.first..i
              currentSum += nums[i]
            } else {
              current = i..i
              currentSum = nums[i]
            }

            if (currentSum > solutionSum) {
              solution = current
              solutionSum = currentSum
            }
          }

          return nums.sliceArray(solution)
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(maxSubArray(intArrayOf(2, 3, -8, 7, -1, 2, 3)))
    .isEqualTo(intArrayOf(7, -1, 2, 3))
}

@Test
fun second() {
  assertThat(maxSubArray(intArrayOf(-2, -4)))
    .isEqualTo(intArrayOf(-2))
}

@Test
fun third() {
  assertThat(maxSubArray(intArrayOf(5, 4, 1, 7, 8)))
    .isEqualTo(intArrayOf(5, 4, 1, 7, 8))
}
```



