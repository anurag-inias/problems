# Majority element

!!! info "try"
    - index: 169
    - difficulty: easy
    - [Majority Element](https://leetcode.com/problems/majority-element/description/)


## Description

Given an array of size $n$, return the majority element. i.e. one that appears more than $\lfloor \dfrac{n}{2} \rfloor$ times. Assume one such element always exist.

## Example

```
Nums:    [3 2 3]
Output:  3

Nums:    [2 2 1 1 1 2 2]
Output:  2
```

## Solution

??? "Approach"

	- start with $a_0$ as the candidate element and the times it's seen as $1$.
	- from this point on, consider all elements. if $a_i = candidate$ then $count++$.
	- otherwise, $count--$. If $count = 0$ then reset candidate.

    ??? "Implementation"

		```kotlin 
		fun majorityElement(nums: IntArray): Int {
			var candidate = nums[0]
			var count = 1

			for (i in 1 until nums.size) {
				if (nums[i] == candidate) {
					count++
				} else if (count == 1) {
					candidate = nums[i]
				} else {
					count--
				}
			}

			return candidate
		}
		```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(majorityElement(intArrayOf(3, 2, 3))).isEqualTo(3)
}

@Test
fun second() {
	assertThat(majorityElement(intArrayOf(2, 2, 1, 1, 1, 2, 2))).isEqualTo(2)
}
```



