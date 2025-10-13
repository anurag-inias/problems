# Sum of All Subset XOR Totals

## Description

Given an array, calculate sum of all subsets' `xor`s.

## Example

```
 input: 1 3
output: 6

 input: 5 1 6
output: 28
```

## Solution

??? "Expand"

    Use [poweset](../techniques/007-powerset.md) generation technique to enumerate all powersets.

    ```kotlin
    fun subsetXORSum(nums: IntArray): Int {
      return helper(nums, 0, 0)
    }

    fun helper(nums: IntArray, index: Int, xor: Int): Int {
      if (index >= nums.size) return xor
      return helper(nums, index + 1, xor) + helper(nums, index + 1, xor xor nums[index])
    }
    ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(subsetXORSum(intArrayOf(1, 3))).isEqualTo(6)
}

@Test
fun second() {
  assertThat(subsetXORSum(intArrayOf(5, 1, 6))).isEqualTo(28)
}
```