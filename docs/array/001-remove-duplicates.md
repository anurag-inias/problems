# Remove duplicates

!!! info "try"
    - index: 26
    - difficulty: easy
    - [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/)

## Description

Given an array of numbers, move all the distinct numbers at the front and return the new length.

## Example

```
input  = [1, 1, 2, 2, 3, 3]
output = [1, 2, 3, ?, ?, ?] and length = 3
```

## Solution

??? "Approach"

    Use a `cursor` to place the next distinct element. When a duplicate is encountered, skip.

??? "Un-sorted array"

    $O(n)$ run time with $O(n)$ auxiliary space.

    ```kotlin
    fun removeDuplicates(array: IntArray): Int {
      val seen = mutableSetOf<Int>()

      var cursor = 0
      for (n in array) {
        if (n !in seen) {
          array[cursor++] = n
          seen += n
        }
      }

      return cursor
    }
    ```

??? "Un-sorted array"

    $O(n)$ run time with no auxiliary space needed.

    ```kotlin
    fun removeSortedDuplicates(array: IntArray): Int {
      var cursor = 0

      for (i in array.indices) {
        if (i == 0 || array[i-1] != array[i])
          array[cursor++] = array[i]
      }

      return cursor
    }
    ```

## Unit tests

```kotlin
@Test
fun empty() {
  val array = IntArray(0)
  assertThat(removeSortedDuplicates(array)).isEqualTo(0)
  assertThat(array.sliceArray(0 until 0)).isEqualTo(IntArray(0))
}

@Test
fun single() {
  val array = intArrayOf(6)
  assertThat(removeSortedDuplicates(array)).isEqualTo(1)
  assertThat(array.sliceArray(0 until 1)).isEqualTo(intArrayOf(6))
}

@Test
fun distinct() {
  val array = intArrayOf(1, 2, 3)
  assertThat(removeSortedDuplicates(array)).isEqualTo(3)
  assertThat(array.sliceArray(0 until 3)).isEqualTo(intArrayOf(1, 2, 3))
}

@Test
fun duplicates_1() {
  val array = intArrayOf(1, 1, 2, 2, 3, 3)
  assertThat(removeSortedDuplicates(array)).isEqualTo(3)
  assertThat(array.sliceArray(0 until 3)).isEqualTo(intArrayOf(1, 2, 3))
}

@Test
fun duplicates_2() {
  val array = intArrayOf(1, 2, 2, 3, 4, 4, 4, 5, 5)
  assertThat(removeSortedDuplicates(array)).isEqualTo(5)
  assertThat(array.sliceArray(0 until 5)).isEqualTo(intArrayOf(1, 2, 3, 4, 5))
}

@Test
fun all_duplicates() {
  val array = intArrayOf(2, 2, 2, 2)
  assertThat(removeSortedDuplicates(array)).isEqualTo(1)
  assertThat(array.sliceArray(0 until 1)).isEqualTo(intArrayOf(2))
}
```



