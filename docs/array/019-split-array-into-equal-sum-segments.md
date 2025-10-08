# Split array into equal sum segments

!!! info "try"
    - index: 1013
    - difficulty: easy
    - [Partition Array Into Three Parts With Equal Sum]https://leetcode.com/problems/partition-array-into-three-parts-with-equal-sum/description/)


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

    Traverse the array left to right while maintaining the running sum. Every time we hit the $\dfrac{total}{3}$ sum, we have found one of the segment. By the end, we should end up with at least three segments.

    What happens when we have more than three segments? All the segments after and including the third segment should sum to the same value ($\dfrac{total}{3}$). This will only happen when $total = 0$.

    ??? "Implementation"

        ```kotlin
		fun segments(nums: IntArray): List<IntRange> {
		  val total = nums.sum()
		  val target = total / 3
		  if (total % 3 != 0) // sum is divisible by 3
		    return emptyList()

		  var sum = 0 // running sum
		  val ranges = mutableListOf<IntRange>() // all 3 ranges to store here

		  for ((i, n) in nums.withIndex()) {
		    sum += n
		    if (sum == target) {
		      val prevEnd = ranges.lastOrNull()?.last ?: -1
		      ranges.add(prevEnd+1..i)
		      sum = 0
		      continue
		    }
		  }

		  if (ranges.count() > 3) {
		    while (ranges.count() >= 3) {
		      ranges.removeLast()
		    }
		    val prevEnd = ranges.lastOrNull()?.last ?: -1
		    ranges.add(prevEnd+1..nums.lastIndex)
		  }

		  return if (ranges.count() != 3) emptyList() else ranges
		}
        ```

## Unit tests

```kotlin
@Test
fun first() {
assertThat(segments(intArrayOf(1, 3, 4, 0, 4)))
    .containsExactly(0..1, 2..2, 3..4)
}

@Test
fun second() {
assertThat(segments(intArrayOf(2, 3, 4)))
    .isEmpty()
}

@Test
fun third() {
assertThat(segments(intArrayOf(1, -1, 1, -1, 1, -1, 1, -1)))
    .containsExactly(0..1, 2..3, 4..7)
}

@Test
fun fourth() {
assertThat(segments(intArrayOf(0, 2, 1, -6, 6, -7, 9, 1, 2, 0, 1)))
    .containsExactly(0..2, 3..7, 8..10)
}

@Test
fun fifth() {
assertThat(segments(intArrayOf(0, 2, 1, -6, 6, 7, 9, -1, 2, 0, 1)))
    .isEmpty()
}

@Test
fun sixth() {
assertThat(segments(intArrayOf(3, 3, 6, 5, -2, 2, 5, 1, -9, 4)))
    .containsExactly(0..1, 2..2, 3..9)
}

@Test
fun seventh() {
assertThat(segments(intArrayOf(1, -1, 1, -1)))
    .isEmpty()
}
```



