# k-th largest subarray sum

## Description

Given an array, find the $k^{th}$ largest sum subarray.

## Example

```
Nums:    [20 -5 -1]
k:       3
Output:  14

[20]=20 [20 -5]=15 [20 -5 -1]=14
[-5]=-5 [-5 -1]=-6 [-1]=-1
[-1]=-1

Subarray sums = [-6 -5 -1 -1 14 15 20]
```

## Solution

??? "Approach"

	Use [prefix sum](../techniques/002-prefix-suffix-arrays.md) to calculate sums of all subarrays. At the same time, use [fixed size heap](../techniques/006-fixed-size-heap.md) technique to eval the k-th largest sum.

    ??? "Implementation"

		```kotlin 
		fun kthMaxSumSubarray(nums: IntArray, k: Int): Int {
			val prefix = IntArray(nums.size)
			prefix[0] = nums[0]
			for (i in 1 until nums.size) {
				prefix[i] = prefix[i-1] + nums[i]
			}

			val minHeap = PriorityQueue<Int>(k)
			for (start in nums.indices) {
				for (end in start until nums.size) {
					val prev = if (start == 0) 0 else prefix[start-1]
					val sum = prefix[end] - prev

					if (minHeap.size < k) minHeap.offer(sum)
					else if (sum > minHeap.peek()) {
						minHeap.poll()
						minHeap.offer(sum)
					}
				}
			}

			while (minHeap.size > k) {
				minHeap.poll()
			}

			return minHeap.peek()
		}
		```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(kthMaxSumSubarray(intArrayOf(20, -5, -1), 3))
		.isEqualTo(14)
}

@Test
fun second() {
	assertThat(kthMaxSumSubarray(intArrayOf(10, -10, 20, -40), 6))
		.isEqualTo(-10)
}
```



