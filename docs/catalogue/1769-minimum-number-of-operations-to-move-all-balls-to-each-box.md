# Minimum Number of Operations to Move All Balls to Each Box

## Description

We are given an integer array where $a_i$ represents number of balls in $i^{th}$ bin. For all indices $i$, calculate the cost of moving all the balls to that index.

## Example

```
 input: 1 1 0
output: 1 1 3

 input: 1 1 1 1
output: 6 4 4 6
```

## Solution

??? "Expand"

    We can use running prefix sum (no aux array needed). The order of operations matter.

    They idea is to traverse left-to-right while maintaining two variables:

    - $balls$ numbers of balls to the immediate left.
    - $moves$ work already done to bring all the balls to $i-1$.

    Then at each iteration we do the following:

    - `nums[i] += moves`: even if a ball was originally way back at index $0$, we still would've needed $moves$ work to first bring it to $i-1$ before it can then be moved to $i$.
    - `balls += box[i]`: besides the balls brought left to $i-1$, there might be balls already at $i-1$.
    - `moves += balls[i]`: now that we have the count of all balls at $i-1$ (already there + brought in), the work needed to move them a step to the right is `+balls[i]`.

    ```kotlin
    fun minOperations(boxes: String): IntArray {
      val nums = IntArray(boxes.length)

      var ballsLeft = 0
      var movesLeft = 0

      var ballsRight = 0
      var movesRight = 0

      for (i in boxes.indices) {
        nums[i] += movesLeft
        ballsLeft += boxes[i].digitToInt()
        movesLeft += ballsLeft

        val j = nums.lastIndex - i
        nums[j] += movesRight
        ballsRight += boxes[j].digitToInt()
        movesRight += ballsRight
      }

      return nums
    }
    ```

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(minOperations("110")).isEqualTo(intArrayOf(1, 1, 3))
}

@Test
fun second() {
  assertThat(minOperations("001011")).isEqualTo(intArrayOf(11, 8, 5, 4, 3, 4))
}

@Test
fun third() {
  assertThat(minOperations("1234")).isEqualTo(intArrayOf(6, 4, 4, 6))
}
```