# Rotate an array

!!! info "try"
    - index: 189
    - difficulty: easy
    - [Rotate Array](https://leetcode.com/problems/rotate-array/description/)

## Description

Given an array of numbers, rotate it by `k` steps.

## Example

```
input  = [1, 2, 3, 4, 5, 6]  k = 3 
output = [4, 5, 6, 1, 2, 3]
```

## Solution


??? "Approach 1"

    Juggling Algorithm. The core idea is to divide the array into gcd(n, k) sets. Each set's elements are rotated among themselves.

    === "$n = 18, k = 12, \ \text{gcd}(12, 18) = 6$"

        The algorithm divides the input array in $6$ sequences, each of which is rotated within itself.

        $$
        \begin{align}
        & \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{12} \ \boxed{13} \ \boxed{14} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        \phantom{\text{group = 0 }} &
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 0 } & \boxed{\phantom 1 \textbf{0}} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 \textbf{6}} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{\textbf{12}} \ \boxed{13} \ \boxed{14} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        & \boxed{\phantom 1 \textbf{6}} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\textbf{12}} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 \textbf{0}} \ \boxed{13} \ \boxed{14} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 1 } & \boxed{\phantom 1 6} \ \boxed{\phantom 1 \textbf 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{\phantom 1 \textbf 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\textbf{13}} \ \boxed{14} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        & \boxed{\phantom 1 6} \ \boxed{\phantom 1 \textbf 7} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{\textbf{13}} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 \textbf 1} \ \boxed{14} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 2 } & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 \textbf 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{13} \ \boxed{\phantom 1 \textbf 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\textbf{14}} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 \textbf 8} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{13} \ \boxed{\textbf{14}} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 \textbf 2} \  \boxed{15} \ \boxed{16} \ \boxed{17} \\
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 3 } & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 \textbf 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{\phantom 1 \textbf 9} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\textbf{15}} \ \boxed{16} \ \boxed{17} \\
        & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 \textbf 9} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{\textbf{15}} \ \boxed{10} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\phantom 1 \textbf 3} \ \boxed{16} \ \boxed{17} \\
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 4 } & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{\phantom 1 \textbf 4} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{15} \ \boxed{\textbf{10}} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\phantom 1 3} \ \boxed{\textbf{16}} \ \boxed{17} \\
        & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{\textbf{10}} \ \boxed{\phantom 1 5} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{15} \ \boxed{\textbf{16}} \ \boxed{11} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\phantom 1 3} \ \boxed{\phantom 4 \textbf 4} \ \boxed{17} \\
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 5 } & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{\phantom 1 \textbf 5} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{15} \ \boxed{16} \ \boxed{\textbf{11}} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\phantom 1 3} \ \boxed{\phantom 4 4} \ \boxed{\textbf{17}} \\
        & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{\textbf{11}} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{15} \ \boxed{16} \ \boxed{\textbf{17}} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\phantom 1 3} \ \boxed{\phantom 4 4} \ \boxed{\phantom 1 \textbf{5}} \\
        \end{align}
        $$

        $$
        \begin{align}
        & \boxed{\phantom 1 6} \ \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 9} \ \boxed{10} \ \boxed{11} \ \boxed{12} \ \boxed{13} \ \boxed{14} \ \boxed{15} \ \boxed{16} \ \boxed{17} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \  \boxed{\phantom 1 3} \ \boxed{\phantom 4 4} \ \boxed{\phantom 1 5} \\
        \phantom{\text{group = 0 }} &
        \end{align}
        $$

    === "$n = 7, k = 3, \ \text{gcd}(7, 3) = 1$"

        The algorithm divides the input array in just $1$ sequence. This sequence ends up wrapping around the array, covering all indices.

        $$
        \begin{align}
        & \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 6} \\
        \phantom{\text{group = 0 }} &
        \end{align}
        $$

        $$
        \begin{align}
        \text{group = 0 } & \boxed{\phantom 1 \textbf 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 \textbf 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 \textbf 6} \\
        & \boxed{\phantom 1 7} \ \boxed{\phantom 1 8} \ \boxed{\phantom 1 \textbf 9} \ \boxed{10} \ \boxed{11} \ \boxed{\textbf{12}} \ \boxed{13} = \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 \textbf 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 \textbf 5} \ \boxed{\phantom 1 6} \\
        & \boxed{14} \ \boxed{\textbf {15}} \ \boxed{16} \ \boxed{17} \ \boxed{\textbf{18}} \ \boxed{19} \ \boxed{20} = \boxed{\phantom 1 0} \ \boxed{\phantom 1 \textbf 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 \textbf 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 6} \\
        & \boxed{\textbf{21}} \ \boxed{22} \ \boxed{23}  \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \  \ \ \ \ \ \ = \boxed{\phantom 1 \textbf 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \\
        \phantom{\text{group = 0 }} &
        \end{align}
        $$

        This means that $0$ is overwritten with $3$, which is overwritten with $6$ and so on:

        $$
        \begin{align}
        \phantom 1 0 \leftarrow \phantom 1 3 \leftarrow \phantom 1 6 & \leftarrow \phantom 1 9 (2) \leftarrow 12 (5) \leftarrow 15 (1) \leftarrow 18 (4) \leftarrow 21 (0) \\
        \end{align}
        $$

        $$
        \begin{align}
        & \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \ \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 6} \\
        & \boxed{\phantom 1 3} \ \boxed{\phantom 1 4} \ \boxed{\phantom 1 5} \ \boxed{\phantom 1 6} \ \boxed{\phantom 1 0} \ \boxed{\phantom 1 1} \ \boxed{\phantom 1 2} \\
        \phantom{\text{group = 0 }} &
        \end{align}
        $$

    ??? "Pseudocode"

        First sanitize the input. $k$ can be greater than `nums.length` or even negative. 

        $$
        k = (n + k \ \% \ n) \ \% \ n
        $$

        Next we need divide the array in $g = gcd(n, k)$ groups:

        1. First group starts from index $0$.
        2. Second ground starts from index $1$.
        3. ...
        4. Last group starts from $g - 1$.

        For each group `i` we do the following:

        1. Backup the first element of the group `temp = a[i]`.
        2. set `curr = i` and `next = (curr + k) % n`.
        3. until we circle back to the beginning of the group (`next != start`), do:
          
            - shuffle elements forward `a[curr] = a[next]` and `curr = next`.
            - update `next = (curr + k) % n`.

        4. now that we are back to the beginning, restored the backed up element `a[curr] = temp`.

    ??? "Expand"

        $O(n)$ run time. 3ms beats 39.21%.

        ```kotlin
        fun rotateRight(nums: IntArray, k: Int): IntArray {
          val n = nums.size
          val k = (n + k % n) % n

          for (start in 0 until gcd(n, k)) {
            val backup = nums[start]
            var curr = start
            var next = (curr + k) % n

            while (next != start) {
              nums[curr] = nums[next]
              curr = next
              next = (curr + k) % n
            }

            nums[curr] = backup
          }
          return nums
        }

        fun gcd(a: Int, b: Int): Int {
          var (x, y) = a to b
          while (y != 0) {
            // swap
            x = y.also { y = x % y }
          }
          return x
        }
        ```

??? "Approach 2"
    Mirroring. 

    ??? "Pseudocode"

        ![](004.png)

    ??? "Expand"

        $O(n)$ run time. 0ms beats 100.00%.


        ```kotlin
        fun rotateRight(nums: IntArray, k: Int): IntArray {
          val n = nums.size
          val k = (n + k % n) % n
          nums.reverse(0, n)
          nums.reverse(0, k)
          nums.reverse(k, n)
          return nums
        }

        private fun IntArray.reverse(start: Int, end: Int) {
          var l = start
          var r = end - 1
          while (l < r) {
            val t = this[l]
            this[l++] = this[r]
            this[r--] = t
          }
        }
        ```

??? "Comparison"

    By all accounts, juggling algorithm should be faster than the double reversal algorithm. After all, juggling algorithm is doing a single pass on the input whereas double reversal algorithm is doing 3x passes. However, double reversal has several points in its favour:

    1. double reversal has better cache locality since it is processing contiguous memory blocks. In juggling algorithm, we end up performing non-sequential processing by jumping by `k` positions.
    2. double reversal has simple index calculation, optimized for processors where as juggling requires complex modulo operations.

## Unit tests

```kotlin
@Test
fun right() {
  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -1))
    .isEqualTo(intArrayOf(6, 1, 2, 3, 4, 5))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -2))
    .isEqualTo(intArrayOf(5, 6, 1, 2, 3, 4))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -3))
    .isEqualTo(intArrayOf(4, 5, 6, 1, 2, 3))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -4))
    .isEqualTo(intArrayOf(3, 4, 5, 6, 1, 2))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -5))
    .isEqualTo(intArrayOf(2, 3, 4, 5, 6, 1))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -6))
    .isEqualTo(intArrayOf(1, 2, 3, 4, 5, 6))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -7))
    .isEqualTo(intArrayOf(6, 1, 2, 3, 4, 5))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), -8))
    .isEqualTo(intArrayOf(5, 6, 1, 2, 3, 4))
}

@Test
fun left() {
  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 1))
    .isEqualTo(intArrayOf(2, 3, 4, 5, 6, 1))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 2))
    .isEqualTo(intArrayOf(3, 4, 5, 6, 1, 2))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 3))
    .isEqualTo(intArrayOf(4, 5, 6, 1, 2, 3))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 4))
    .isEqualTo(intArrayOf(5, 6, 1, 2, 3, 4))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 5))
    .isEqualTo(intArrayOf(6, 1, 2, 3, 4, 5))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 6))
    .isEqualTo(intArrayOf(1, 2, 3, 4, 5, 6))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 7))
    .isEqualTo(intArrayOf(2, 3, 4, 5, 6, 1))

  assertThat(rotate(intArrayOf(1, 2, 3, 4, 5, 6), 8))
    .isEqualTo(intArrayOf(3, 4, 5, 6, 1, 2))
}
```



