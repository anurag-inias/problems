# Smallest missing number in sorted array

## Description

Given a sorted array, find the smallest missing number.

## Example

```
Nums:    [0 1 2 6 9]
Output:  3

Nums:    [4 5 10 11]
Output:  0

Nums:    [0 1 2 3]
Output:  4

Nums:    [0 1 2 3 4 5 6 7 10]
Output:  8
```

## Solution

??? "First Approach"

	Simply iterate from left to right and seek an element at $i$ such that $a[i] - a[i-1] > 1$. The missing number is $a[i-1] + 1$. $O(n)$ approach.


??? "Second Approach"

	Based on [binary search](https://listless.dev/algorithms/search/binary). 
	
	- Start two pointers at each end of the input $l = 0$ and $r = n-1$.
	- Find the middle $m = \dfrac{l + r}{2}$. If $a[i] = i$ then the missing element is in right half. Otherwise it's in left half.


	$O(\log{n})$ approach.

    ??? "Implementation"

		```kotlin 
		fun missing(nums: IntArray): Int {
			if (nums[0] != 0) return 0

			var l = 0
			var r = nums.lastIndex

			while (l <= r) {
				val m = l + (r - l) / 2
				if (nums[m] == m) l = m + 1
				else r = m - 1
			}

			return nums[r] + 1
		}
		```

	Example runs

	```
	[0 1 2 3] 
	       ^
	       r  l

	[0 2 3 4]
	 ^
	 r l
	```

	In fact, this is exactly same as our binary search algorithm. There, we were looking for our element and failing that, the place where it would be inserted. That's why we returned `a[l]` in the binary search. But here we are returning `a[r]+1`.

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(missing(intArrayOf(0))).isEqualTo(1)
	assertThat(missing(intArrayOf(1))).isEqualTo(0)
}

@Test
fun second() {
	assertThat(missing(intArrayOf(0, 1))).isEqualTo(2)
	assertThat(missing(intArrayOf(1, 2))).isEqualTo(0)
	assertThat(missing(intArrayOf(0, 2))).isEqualTo(1)
	assertThat(missing(intArrayOf(0, 3))).isEqualTo(1)
}

@Test
fun third() {
	assertThat(missing(intArrayOf(0, 1, 2))).isEqualTo(3)
	assertThat(missing(intArrayOf(1, 2, 3))).isEqualTo(0)
	assertThat(missing(intArrayOf(0, 2, 3))).isEqualTo(1)
	assertThat(missing(intArrayOf(0, 1, 3))).isEqualTo(2)
	assertThat(missing(intArrayOf(1, 3, 4))).isEqualTo(0)
	assertThat(missing(intArrayOf(0, 2, 5))).isEqualTo(1)
}

@Test
fun fourth() {
	assertThat(missing(intArrayOf(1, 2, 3, 4))).isEqualTo(0)
	assertThat(missing(intArrayOf(0, 2, 3, 4))).isEqualTo(1)
	assertThat(missing(intArrayOf(0, 1, 3, 4))).isEqualTo(2)
	assertThat(missing(intArrayOf(0, 1, 2, 4))).isEqualTo(3)
	assertThat(missing(intArrayOf(0, 1, 2, 3))).isEqualTo(4)
	assertThat(missing(intArrayOf(0, 3, 5, 6))).isEqualTo(1)
	assertThat(missing(intArrayOf(0, 1, 5, 6))).isEqualTo(2)
}

@Test
fun all() {
	for (size in 1..20) {
		val list = mutableListOf<Int>()
		for (i in 0..size) {
			list.add(i)
		}

		for (i in 0..size) {
			val copy = mutableListOf<Int>()
			copy.addAll(list)
			copy.removeAt(i)

			assertThat(missing(copy.toIntArray())).isEqualTo(i)
		}
	}
}
```



