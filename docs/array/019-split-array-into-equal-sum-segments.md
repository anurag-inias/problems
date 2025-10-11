# Split array into equal sum segments

!!! info "try"
    - index: 1013
    - difficulty: easy
    - [Partition Array Into Three Parts With Equal Sum](https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/description/)


## Description

Given an array, divide it into three non-empty subarrays (back to back) with equal sum. If not possible, return empty ranges.

## Example

```
Input: [1, 3, 4, 0, 4]
Output: 0..1, 2..2, 3..4

Input: [2, 3, 4]
Output: IntRange.EMPTY

Input: [1, -1, 1, -1, 1, -1, 1, -1]
Output: 0..1, 2..3, 4..7
```

## Solution

??? "First approach"

    Sliding window:

	- Maintain two pointers $start$ and $end$, both at $0$.
	- Also maintain $remaining = k$ to track how many $0s$ we have flipped so far.
	- Keep incrementing $end$ until we reach the array back, while:
		- if the current number is $1$, then just update the candidate solution subarray $end - start + 1$.
		- otherwise the current number is $0$, here two things can happen:
		  	- if $remaining > 0$ then decrement it by one and the rest is same as previous scenario.
				- otherwise we have overspent. We then shift $start$ forward to recover some of the flipped $0s$.

    ??? "Implementation"

        ```kotlin
		fun maxSubarray(nums: IntArray, k: Int): IntArray {
			var start = 0
			var end = 0
			var remaining = k

			var max = 0
			var range = 0..0

			while (end < nums.size) {
				if (nums[end] == 1 || remaining > 0) {
					if (nums[end] == 0) remaining--

					if (end - start + 1 > max) {
						max = end - start + 1
						range = start..end
					}

					end++
					continue
				}
				if (nums[start] == 0) remaining++
				start++
			}

			return nums.sliceArray(range)
		}
        ```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(maxSubarray(intArrayOf(1, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1), 2))
		.isEqualTo(intArrayOf(1, 1, 0, 1, 0, 1, 1, 1))
}

@Test
fun second() {
	assertThat(maxSubarray(intArrayOf(1, 0, 0, 1, 0, 1, 0, 1), 2))
		.isEqualTo(intArrayOf(1, 0, 1, 0, 1))
}

@Test
fun third() {
	assertThat(maxSubarray(intArrayOf(1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0), 2))
		.isEqualTo(intArrayOf(0, 0, 1, 1, 1, 1))
}

@Test
fun fourth() {
	assertThat(maxSubarray(intArrayOf(0, 0, 0, 0), 0))
		.isEqualTo(intArrayOf())
}
```



