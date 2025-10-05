# Two sum

!!! info "try"
    - index: 1
    - difficulty: easy
    - [Two sum](https://leetcode.com/problems/two-sum/)


## Description

Given an array and a target, find the two numbers which will sum up to the target.

## Example

```
Input: [2, 7, 11, 15] target: 9
Output: [0, 1]

Input: [3, 2, 4] target: 6
Output: [1, 2]

Input: [3, 3] target: 6
Output: [0, 1]
```

## Solution

??? "First approach"

    First sort the array and then use [converging pointers](../techniques/003-converging-pointers.md) approach.

??? "Second approach"

    Use [seen map](../techniques/004-seen-map.md) approach.

## Unit tests

```kotlin
@Test
fun first() {
  assertThat(twoSum(intArrayOf(-3, -1, 0, 1, 2), -2))
    .isEqualTo(intArrayOf(-3, 1))
}
```



