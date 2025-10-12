# Reorder by index array

## Description

Given two arrays $nums$ and $indices$ of same lengths, reorder $nums$ as per $indices$.

## Example

```
Nums:    [10 11 12]
Indices: [1 0 2] 
Output:  [11 10 12]

Nums:    [1 2 3 4]
Indices: [3 2 0 1] 
Output:  [3 4 2 1]
```

## Solution

??? "First approach"

	Utilize the technique [Pack two integers in one](../techniques/001-pack-two-integers-in-one.md). Iterate over all elements in two passes.

	1. in first pass, $nums[d] = nums[d] + n \cdot nums[i]$ where $d = indices[i]$ is the desired index. 
	2. in second pass, $nums[i] = nums[i] / n$

	Note that in #1, $nums[i]$ could already be packing two integers (current value and the desired value). So make sure to $nums[i] \% n$.  

	where $n = \text{max}(nums) + 1$

		```kotlin 
		fun indexSort(nums: IntArray, indices: IntArray): IntArray {

			val n = nums.max() + 1

			for ((currentIndex, e) in nums.withIndex()) {
				val desiredIndex = indices[currentIndex]

				// recover the original in case it's already packing two nums.
				val e = e % n
				nums[desiredIndex] = nums[desiredIndex] + n * e
			}

			for (i in nums.indices) {
				nums[i] = nums[i] / n
			}

			return nums
		}
		```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(indexSort(intArrayOf(10, 11, 12), intArrayOf(1, 0, 2)))
		.isEqualTo(intArrayOf(11, 10, 12))
}

@Test
fun second() {
	assertThat(indexSort(intArrayOf(1, 2, 3, 4), intArrayOf(3, 2, 0, 1)))
		.isEqualTo(intArrayOf(3, 4, 2, 1))
}

@Test
fun third() {
	assertThat(indexSort(intArrayOf(50, 40, 70, 60, 90), intArrayOf(3, 0, 4, 1, 2)))
		.isEqualTo(intArrayOf(40, 60, 90, 50, 70))
}
```



