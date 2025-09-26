# Sum of all subarrays

## Description

Given an array of integers, compute the sum of all subarrays.

## Example

```
input  = [1, 2, 3, 4]
output = 50
```

=== "`[1, 2, 3, 4]`"

    ```
    1
    1 2 
    1 2 3
    1 2 3 4

    2
    2 3
    2 3 4

    3
    3 4

    4
    ```

=== "`[1, 2, 3, 4, 5]`"

    ```
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5

    2
    2 3
    2 3 4
    2 3 4 5

    3
    3 4
    3 4 5

    4
    4 5

    5
    ```


=== "`[1, 2, 3, 4, 5, 6]`"

    ```
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
    1 2 3 4 5 6

    2
    2 3
    2 3 4
    2 3 4 5
    2 3 4 5 6

    3
    3 4
    3 4 5
    3 4 5 6

    4
    4 5
    4 5 6

    5
    5 6

    6
    ```

## Solution

??? "Approach"

    Consider the example subarrays in the tabs above. Start from bottom to top.

    Set of subarrays starting from $i$ create a triangle and that triangle is included in the set of subarrays starting from $i-1$ and so on. 

    ??? "Pseudocode"

        - number of subarrays starting with number at index $i$ is $len(nums) - i$. For example, in $1, 2, 3, 4, 5$ the number of subarrays starting with $4$ are $5 - 2 = 3$.
        - sum of all subarrays starting with number at $i$ then is: $(len(num) - i) \cdot nums[i] + prev$ where prev is calculated recursively for index $i+1$. 

    ??? "Implementation"

        ```kotlin
        fun sumOfSubarrays(nums: IntArray): Int {
          var sum = 0
          var prev = 0
          for ((i, n) in nums.withIndex().reversed()) {
            val triangle = (nums.size - i) * n + prev
            sum += triangle
            prev = triangle
          }
          return sum
        }
        ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(sumOfSubarrays(intArrayOf(1, 4, 5, 3, 2)))
    .isEqualTo(116)
}

@Test
fun second() {
  assertThat(sumOfSubarrays(intArrayOf(1, 2, 3, 4)))
    .isEqualTo(50)
}
```



