# Majority element

!!! info "try" 
	- index: 611 
	- difficulty: medium 
	- [Valid triangle number](https://leetcode.com/problems/valid-triangle-number/description/)

## Description

Given an array of integers, return the number of valid triplets that can form a triangle. A triplet $(a, b, c)$ forms a valid triangle if:

1. $a + b > c$
1. $b + c > a$
1. $a + c > b$

## Example

```
Nums:    [4 6 3 7]
Output:  3 [3 4 6] [4 6 7] [3 6 7]

Nums:    [1 2 3]
Output:  0
```

## Solution

??? "First approach"

    	Simply run three nested loop for $a$, $b$ and $c$ in $O(n^3)$ time.

??? "Second approach"

    - Sort the array first ($O(n \log n)$).
    - Run a loop for $c$, assuming it to be the largest number, over index range $[2, n)$.
    - Use two pointer method for finding $a$ and $b$, intialized to $0$ and $c-1$.

    	In each iteration of the inner loop, compare the sum $a + b$ vs $c$. Since $c$ is the largest value:

    	$$
    	\begin{align}
    	& \textbf{if } a + b > c \text{ then } \\
    	& \implies a + c > b \\
    	& \text{ and } \ \ b + c > a
    	\end{align}
    	$$

    ```kotlin linenums="1"
    fun triangleNumber(nums: IntArray): Int {
    	nums.sort()
    	var count = 0

    	for (c in 2 until nums.size) {
    		var a = 0
    		var b = c - 1
    		while (a < b) {
    			when((nums[a] + nums[b]).compareTo(nums[c])) {
    				-1, 0 -> a++
    				1 -> {
    					count += b - a
    					b--
    				}
    			}
    		}
    	}

    	return count
    }
    ```

    The whole thing runs in $O(n^2)$.

## Unit tests

```kotlin
@Test
fun first() {
	assertThat(triangleNumber(intArrayOf(2, 2, 3, 4))).isEqualTo(3)
}

@Test
fun second() {
	assertThat(triangleNumber(intArrayOf(4, 2, 3, 4))).isEqualTo(4)
}

@Test
fun third() {
	assertThat(triangleNumber(intArrayOf(4, 6, 3, 7))).isEqualTo(3)
}

@Test
fun fourth() {
	assertThat(triangleNumber(intArrayOf(10, 21, 22, 100, 101, 200, 300))).isEqualTo(6)
}

@Test
fun fifth() {
	assertThat(triangleNumber(intArrayOf(1, 2, 3))).isEqualTo(0)
}
```
