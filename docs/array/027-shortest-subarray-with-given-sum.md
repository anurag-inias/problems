# Shortest subarray with given sum

!!! info "try"
    - index: 209
    - difficulty: medium
    - [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/description/)


## Description

Given an array of positive integers and a positive $target$, find the minimum length of a subarray whose sum is equal or greater than $target$. Return $0$ is no such subarray found.

## Example

```
Nums:    [2 3 1 2 4 3]
Target:  7
Output:  2 [4, 3]

Nums:    [1 4 4]
Target:  4
Output:  1 [1] [2]
```

## Solution

??? "First Approach"

	Utilize [prefix subarray](../techniques/002-prefix-suffix-arrays.md) approach to figure out subarray with target sum.

    ??? "Implementation"

		```kotlin 
		fun minSubArrayLen(target: Int, nums: IntArray): Int {
			val seen = TreeMap<Int, MutableList<Int>>()
			seen[0] = mutableListOf(-1)

			var sum = 0
			var shortest = Int.MAX_VALUE

			for ((i, n) in nums.withIndex()) {
				sum += n

				seen.putIfAbsent(sum, mutableListOf())
				seen[sum]?.add(i)

				for ((s, l) in seen.subMap(Int.MIN_VALUE, true, sum - target, true)) {
					for (p in l) {
						shortest = min(shortest, i - (p + 1) + 1)
					}
				}
			}

			return if (shortest == Int.MAX_VALUE) 0 else shortest
		}
		```


??? "Second Approach"

	Sliding window.

    ??? "Implementation"

		```kotlin 
		fun minSubArrayLen(target: Int, nums: IntArray): Int {
			var start = 0
			var end = 0
			var sum = 0
			var len = 0

			while (end < nums.size) {
				sum += nums[end]
				while (sum >= target) {
					val l = end - start + 1
					if (len == 0 || l < len) {
						len = l
					}
					sum -= nums[start++]
				}
				end++
			}

			return len
		}
		```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(minSubArrayLen(7, intArrayOf(2, 3, 1, 2, 4, 3))).isEqualTo(2)
}

@Test
fun second() {
	assertThat(minSubArrayLen(4, intArrayOf(1, 4, 4))).isEqualTo(1)
}

@Test
fun third() {
	assertThat(minSubArrayLen(11, intArrayOf(1, 1, 1, 1, 1, 1, 1, 1))).isEqualTo(0)
}

@Test
fun fourth() {
	assertThat(minSubArrayLen(50, intArrayOf(1, 4, 45, 6, 3, 19))).isEqualTo(2)
}

@Test
fun fifth() {
	assertThat(minSubArrayLen(11, intArrayOf(1, 2, 3, 4, 5))).isEqualTo(3)
}

@Test
fun sixth() {
	assertThat(minSubArrayLen(15, intArrayOf(1, 2, 3, 4, 5))).isEqualTo(5)
}
```



