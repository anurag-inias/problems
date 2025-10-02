# Single among doubles

!!! info "try"
    - index: 136
    - difficulty: easy
    - [Single Number](https://leetcode.com/problems/single-number/description/)

## Description

Given a non-empty array of numbers where all but one number is duplicated, find the non-duplicated number

## Example

```
input  = [2, 2, 1]
output = 1

input  = [4, 1, 2, 1, 2]
output = 4
```

## Solution

??? "Approach"

    Simply xor all numbers. Since $a \oplus a = 0$, this will cancel out all the duplicate numbers, leaving the only non-duplicate number for the picking.

    ??? "Implementation"

        ```kotlin
        fun singleNumber(nums: IntArray): Int {
          var x = 0

          for (n in nums) {
            x = x xor n
          }

          return x
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(singleNumber(intArrayOf(2, 2, 1)))
    .isEqualTo(1)
}

@Test
fun second() {
  assertThat(singleNumber(intArrayOf(4, 1, 2, 1, 2)))
    .isEqualTo(4)
}

@Test
fun third() {
  assertThat(singleNumber(intArrayOf(1)))
    .isEqualTo(1)
}
```



