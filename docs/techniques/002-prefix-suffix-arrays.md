## Prefix/Suffix arrays

This is a powerful technique to efficiently calculate the sum of elements within any subarray while traversing left or right.

```kotlin
val left = IntArray(nums.size)
left[0] = nums[0]

for (i in 1 until nums.size) {
  left[i] = left[i-1] + nums[i]
}
```

## Avoiding extra space

Sometimes it is possible to avoid the auxiliary space allotment. Instead of saving the prefix/suffix sums, you can calculated on the fly:

$$
\begin{align}
S_l + n + S_r &= S \\
S_r &= S - n - S_l
\end{align}
$$

```kotlin
val total = nums.sum()
var left = 0

for (i in nums.indices) {
  val right = total - nums[i] - left

  // You logic goes here.

  left += nums[i]
}
```
