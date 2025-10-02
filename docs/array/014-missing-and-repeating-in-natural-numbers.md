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

??? "Second Approach"

    This problem is a special case of a more general problem:

    > Find the two elements with odd occurrences in an array where all other elements appear even number of times.

    That is, let's say the expected array was $E$ and the actual array we got was $A$: 
    
    $$
    \begin{align}
    E &= a, b, c, m, r \\
    A &= a, b, c, r, r
    \end{align}
    $$
    
    where $m$ is the missing number and $r$ is the repeating number, with $a$, $b$, and $c$ being the remaining numbers.

    If we were to concatenate the two lists, we get $L$ (ignore the elements order):

    $$
    L = a, a, b, b, c, c, m, r, r, r
    $$ 

    Notice the elements we are interested in are occuring odd number of times and the remaining elements appear even number of times. And, we have no longer the restriction over the range of these elements. That is, a more generalized problem.

    <hr>

    If we xor over $L$, we get $x$ as:

    $$
    \begin{align}
    x &= a \oplus a \oplus b \oplus b \oplus c \oplus c \oplus m \oplus r \oplus r \oplus r \\
    &= m \oplus r
    \end{align}
    $$

    Now in $x$, bits shared between $m$ and $r$ will be zero and only the bits where the two differ will be set. That is, if an arbitrary bit in $x$ is set, then:

    $$
    \begin{align}
    b_i(m) = 0 &\text{ and } b_i(r) = 1 \\
    b_i(m) = 1 &\text{ and } b_i(r) = 0
    \end{align}
    $$

    Let's pick the rightmost set bit, which can be calculated as $mask = x \ \ \& \ -x$. If we iterate over $L$ with this mask, it will split the numbers in two groups.

    $$
    \begin{align}
    A &= a, a, r, r, r \\
    B &= b, b, c, c, m
    \end{align}
    $$

    $m$ and $r$ can now be recovered from their individual groups as per previously discussed [Unique number](011-unique-number.md) problem.

    !!! note
          
        I'm showing $a$ falling in same group as $r$ as an example. The actual result will vary. The key point though is that in each of the two groups, the numbers we are not interest will appear even times and the number that we are interested in ($m$ and $r$) will not share the same group. 

    ??? "Implementation"

        ```kotlin
        fun missingRepeatingNumbers(nums: IntArray): Pair<Int, Int> {
          var x = 0
          for (n in (1..nums.size).toList() + nums.toList()) { // 1..n + actual numbers
            x = x xor n
          }

          val mask = x and -x
          var a = 0
          var b = 0
          for (n in (1..nums.size).toList() + nums.toList()) {
            if ((n and mask) == 0) a = a xor n
            else b = b xor n
          }

          return a to b
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



