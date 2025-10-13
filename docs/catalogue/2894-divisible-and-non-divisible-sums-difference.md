# Divisible and Non-divisible Sums Difference

## Description

Given two positive integers $n$ and $m$, return $num1-num2$ where:

- $num1$ sum of all integers in $[1, n]$ not divisible by $m$.
- $num2$ sum of all integers in $[1, n]$ divisible by $m$.

## Example

```
 input: n = 10, m = 3
output: 19
```

## Solution

??? "Expand"

    $$
    \begin{align}
    num1 + num2 &= sum \\
    \implies num1 - num2 &= sum - 2\cdot num2
    \end{align}
    $$

    and we know

    $$
    sum = n \cdot \dfrac{n+1}{2}
    $$

    and

    $$
    \begin{align}
    num2 &= m + 2m + 3m + \dots + km \\
    &= m \cdot (1 + 2 + 3 + \dots + k) \\
    &= m \cdot k \cdot \dfrac{k+1}{2}
    \end{align}
    $$

    where $k = \lfloor n/m \rfloor$.

    ```kotlin
    fun differenceOfSums(n: Int, m: Int): Int {
      val k = n / m
      val sum = n.cumulativeSum
      val num2 = m * k.cumulativeSum
      return sum - 2 * num2
    }

    private val Int.cumulativeSum: Int
      get() = this * (this + 1) / 2
    ```
