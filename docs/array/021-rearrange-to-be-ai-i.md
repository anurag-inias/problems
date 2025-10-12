# Rearrange array such that $a_i = i$

## Description

We are given an array $arr$ of length $n$ containing elements in $[0, n)$. Some elements may be absent, in which case they are replaced with $-1$. Rearrange the array back such that $arr[i] = i$.

## Example

```
Input:  [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1]
Output: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9]

Input:  [0, 1, 2, 3, 4, 5]
Output: [0, 1, 2, 3, 4, 5]
```

## Solution

??? "First approach"

	Process elements left to right as $e$ at index $i$:

	- if $e = -1$, then nothing to do.
	- if $arr[e] = e$, then element is already correctly placed. nothing to do.
	- otherwise, just swap elements.

    ??? "Implementation"

		```kotlin 
		fun rearrange(nums: IntArray): IntArray {
			var i = 0
			while (i < nums.size) {
				val e = nums[i]
				if (e == -1) {
					i++
					continue
				}
				if (nums[e] == e) {
					i++
					continue
				}
				nums[i] = nums[e]
				nums[e] = e
			}
			return nums
		}
		```

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(rearrange(intArrayOf(-1, -1, 6, 1, 9, 3, 2, -1, 4, -1)))
		.isEqualTo(intArrayOf(-1, 1, 2, 3, 4, -1, 6, -1, -1, 9))
}

@Test
fun second() {
	assertThat(rearrange(intArrayOf(0, 1, 2, 3, 4, 5)))
		.isEqualTo(intArrayOf(0, 1, 2, 3, 4, 5))
}

@Test
fun third() {
	assertThat(rearrange(intArrayOf(3, -1, -1, 0)))
		.isEqualTo(intArrayOf(0, -1, -1, 3))
}

@Test
fun fourth() {
	assertThat(rearrange(intArrayOf(4, 3, 2, 1, 0)))
		.isEqualTo(intArrayOf(0, 1, 2, 3, 4))
}

@Test
fun fifth() {
	assertThat(rearrange(intArrayOf(0, -1, 5, 4, 3, 2, -1)))
		.isEqualTo(intArrayOf(0, -1, 2, 3, 4, 5, -1))
}

@Test
fun random() {
	val rand = ThreadLocalRandom.current()
	val n = rand.nextInt(10, 100)
	val original = IntArray(n)
	for (i in original.indices) {
		original[i] = if (rand.nextInt(0, 101) < 30) -1 else i
	}

	val copy = rearrange(shuffle(original.copyOf()))
	assertThat(copy).isEqualTo(original)
}

// Fisher-Yates Shuffle
private fun shuffle(nums: IntArray): IntArray {
	val rand = ThreadLocalRandom.current()
	for (i in nums.lastIndex downTo 1) {
		val j = rand.nextInt(0, i)
		val t = nums[j]
		nums[j] = nums[i]
		nums[i] = t
	}
	return nums
}
```



