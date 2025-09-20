# Generate all subarrays

## Description

Given an array of numbers, generate all subarrays.

## Example

```
input  = [1, 2, 3]
output = [1] [1, 2] [1, 2, 3] [2] [2, 3] [3]
```

## Solution

??? "Approach"

    Sliding window; worm crawl.

??? "Expand"

    $O(n^2)$ run time.

    ```kotlin
    fun generateSubArrays(nums: IntArray): List<List<Int>> {
      val out = mutableListOf<List<Int>>()
      for (start in nums.indices) {
        val partial = mutableListOf<Int>()
        for (end in start..nums.lastIndex) {
          partial.add(nums[end])
          out.add(partial.toList())
        }
      }
      return out
    }
    ```

## Unit tests

```kotlin
@Test
fun empty() {
  assertThat(generateSubArrays(intArrayOf())).isEmpty()
}

@Test
fun single() {
  assertThat(generateSubArrays(intArrayOf(5))).containsExactlyInAnyOrder(listOf(5))
}

@Test
fun two() {
  assertThat(generateSubArrays(intArrayOf(1, 2))).containsExactlyInAnyOrder(
    listOf(1),
    listOf(1, 2),
    listOf(2),
  )
}

@Test
fun three() {
  assertThat(generateSubArrays(intArrayOf(1, 2, 3))).containsExactlyInAnyOrder(
    listOf(1),
    listOf(1, 2),
    listOf(1, 2, 3),
    listOf(2),
    listOf(2, 3),
    listOf(3),
  )
}
```



