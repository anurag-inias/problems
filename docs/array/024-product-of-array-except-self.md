# Product of array except self

## Description

Given an array $arr$ of $n$ integers, return the array $prod$ where each element is the product of all elements of $arr$ except the one at the same index.

## Example

```
Nums:    [10 3 5 6 2]
Output:  [180 600 360 300 900]

Nums:    [12 0]
Output:  [0 12]
```

## Solution

??? "First approach"

	Use [prefix and suffix arrays](../techniques/002-prefix-suffix-arrays.md) to maintain product of the elements on the left and right. Then simply multiply them both to find the product of array except the element itself.

    ??? "Implementation"

		```kotlin 
		fun prod(nums: IntArray): IntArray {
			val left = IntArray(nums.size) { 1 }
			val right = IntArray(nums.size) { 1 }

			for (i in nums.indices) {
				val j = nums.lastIndex - i
				if (i != 0) left[i] = left[i-1] * nums[i-1]
				if (j != nums.lastIndex) right[j] = right[j+1] * nums[j+1]
			}

			for (i in nums.indices) {
				nums[i] = left[i] * right[i]
			}

			return nums
		}
		```

??? "Second approach"

	We already know that we can find out the product of the whole array $prod$ and simply $prod / e$ to find the desired product. Problem happens when array has one or more zero.

	- if there are more than one $0s$, then we can simply return $[0, 0, \dots, 0]$.
	- if there are no zeros, then the $prod / e$ approach works just fine.
	- otherwise, there is just one zero. We can return $[0, 0, \dots, prod, \dots, 0]$, where $prod$ is product of all elements except the lone $0$.

    ??? "Implementation"

		```kotlin 
		fun prod(nums: IntArray): IntArray {
			var zeroIndex = -1
			var prod = 1

			for ((i, n) in nums.withIndex()) {
				if (n != 0) {
					prod *= n
				} else if (zeroIndex >= 0) { // more than one 0s
					nums.fill(0, fromIndex = 0, toIndex = nums.size)
					return nums
				} else {
					zeroIndex = i
				}
			}

			if (zeroIndex >= 0) {
				nums.fill(0, fromIndex = 0, toIndex = nums.size)
				nums[zeroIndex] = prod
				return nums
			}

			for ((i, n) in nums.withIndex()) {
				nums[i] = prod / n
			}

			return nums
		}
		```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(prod(intArrayOf(10, 3, 5, 6, 2)))
		.isEqualTo(intArrayOf(180, 600, 360, 300, 900))
}

@Test
fun second() {
	assertThat(prod(intArrayOf(12, 0)))
		.isEqualTo(intArrayOf(0, 12))
}
```



