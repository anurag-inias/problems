# Repeating number in list of first N-1 natural numbers

## Description

Given an array of size $n$ with distinct integers in the range $[1, n-1]$, find the one repeating integer.

## Example

```
input  = [1, 3, 2, 3, 4]
output = 3

input  = [1, 5, 1, 2, 3, 4]
output = 1
```

## Solution

??? "First Approach"

    The expected list is $E = [1, 2, \dots, n-1]$ of size $n-1$. But one of the element is repeating, so the actual list is $A$ with the sum:

    $$
    \begin{align}
    S_A &= S_E + r  \\
        &= (n-1) \cdot \dfrac{n}{2} + r \\
     r &= S_A - (n-1) \cdot \dfrac{n}{2}
    \end{align}
    $$

    ??? "Implementation"

        ```kotlin
        fun repeatingNumber(nums: IntArray): Int {
          val n = nums.size
          return nums.sum() - (n-1) * n / 2
        }
        ```

??? "Second Approach"

    So we have expected list $E$ and the actual list $A$ like this:

    $$
    \begin{align}
    E &= 1 + 2 + \dots + n-1 \\
    A &= E + r \text{ where } r \in [1, n-1]
    \end{align}
    $$

    so if we are to xor through both $E$ and $A$, then that flips the duplicates and non-duplicates. That is, non-duplicate elements become duplicate, cancelling out their xor. While the $r$, the repeated element now ends up with 3 instances, and survives the xor.

    $$
    \begin{align}
    1 \oplus 1 \oplus 2 \oplus 2 \oplus \dots \oplus n-1 \oplus n-1 \oplus r
    \end{align}
    $$


    ??? "Implementation"

        ```kotlin
        fun repeatingNumber(nums: IntArray): Int {
          val n = nums.size
          var r = 0
          for (i in nums.toList() + (1 until n)) {
            r = r xor i
          }
          return r
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(repeatingNumber(intArrayOf(1, 3, 2, 3, 4)))
    .isEqualTo(3)
}

@Test
fun second() {
  assertThat(repeatingNumber(intArrayOf(1, 5, 1, 2, 3, 4)))
    .isEqualTo(1)
}
```



