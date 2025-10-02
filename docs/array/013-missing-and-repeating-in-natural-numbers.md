# Missing and repeating number in list of first N natural numbers

## Description

We are given an array of size $n$ which is supposed to contain the distinct numbers from $[1, n]$. However, one number is missing and in its turn another number is repeated. Find them both.

## Example

```
input  = [1, 2, 3, 3, 4]
output = (3, 4) with 3 repeating and 4 missing
```

## Solution

??? "First Approach"

    Let $S_e$ be expected sum of these numbers and $S_a$ be the actual sum of these numbers. Now let $m$ be the missing number and $r$ be the repeating number:

    $$
    \begin{align}
    S_e - m + r &= S_a \\
    S_e - S_a &= m - r
    \end{align}
    $$

    Now let $S^{2}_e$ be expected sum of the numbers squared (i.e. $S^{2}_e = 1^2 + 2^2 + \dots + n^2 = \dfrac{2n^3 + 3n^2 + n}{6}$), and let $S^{2}_a$ be the actual sum of the given numbers squared.

    $$
    \begin{align}
    S^{2}_e - m^2 + r^2 &= S^{2}_a \\
    S^{2}_e - S^{2}_a &= m^2 - r^2 \\
    S^{2}_e - S^{2}_a &= (m + r)(m - r) \\
    \\
    \dfrac{S^{2}_e - S^{2}_a}{S_e - S_a} &= m + r
    \end{align}
    $$

    ??? "Implementation"

        ```kotlin
        fun missingRepeatingNumbers(nums: IntArray): Pair<Int, Int> {
          val n = nums.size
          var `m - r` = n * (n + 1) / 2
          var `m2 - r2` = ((2 * pow(n.toDouble(), 3.toDouble()) + 3 * pow(n.toDouble(), 2.toDouble()) + n) / 6).toInt()

          for (n in nums) {
            `m - r` -= n
            `m2 - r2` -= n * n
          }

          val `m + r` = `m2 - r2` / `m - r`
          val m = (`m + r` + `m - r`) / 2
          val r = (`m + r` - `m - r`) / 2
          return m to r
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(missingRepeatingNumbers(intArrayOf(3, 1, 3)))
    .isEqualTo(2 to 3) // 2 is missing, 3 is repeating
}

@Test
fun second() {
  assertThat(missingRepeatingNumbers(intArrayOf(4, 3, 6, 2, 1, 1)))
    .isEqualTo(5 to 1) // 5 is missing, 1 is repeating
}
```



