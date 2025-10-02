# Missing number in list of first N natural numbers

## Description

Given an array of size $n-1$ with distinct integers in the range $[1, n]$, find the one missing integer.

## Example

```
input  = [1, 2, 3, 5]
output = 4
```

## Solution

??? "Approach"

    Sum of first $n$ natural numbers is $n \cdot \dfrac{n+1}{2}$. We simply have to subtract the ones present.

    ??? "Implementation"

        ```kotlin
        fun missingNumber(nums: IntArray): Int {
          val n = nums.size + 1
          var sum = n * (n + 1) / 2
          for (i in nums)
            sum -= i
          return sum
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(missingNumber(intArrayOf(8, 2, 4, 5, 3, 7, 1)))
    .isEqualTo(6)
}

@Test
fun second() {
  assertThat(missingNumber(intArrayOf(1, 2, 3, 5)))
    .isEqualTo(4)
}
```



