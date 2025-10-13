# Build array from permutation

## Description

Given an array of size $n$ with distinct elements in range $[0, n)$, rearrange it such that $nums[i] = nums[nums[i]]$.

## Example

```
 input: 0 2 1 5 3 4
output: 0 1 2 4 5 3

 input: 5 0 1 2 3 4
output: 4 5 0 1 2 3
```

## Solution

??? "Expand"

    Use [Pack two integers in one](../techniques/001-pack-two-integers-in-one.md) technique.

    ```kotlin
    fun buildArray(nums: IntArray): IntArray {
      val k = 1001
      for ((i, n) in nums.withIndex()) {
        val original = n % k
        val destination = nums[original] % k
        nums[i] = original + destination * k
      }
      for (i in nums.indices) {
        nums[i] /= k
      }
      return nums
    }
    ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(buildArray(intArrayOf(0, 2, 1, 5, 3, 4))).isEqualTo(intArrayOf(0, 1, 2, 4, 5, 3))
}

@Test
fun second() {
  assertThat(buildArray(intArrayOf(5, 0, 1, 2, 3, 4))).isEqualTo(intArrayOf(4, 5, 0, 1, 2, 3))
}
```