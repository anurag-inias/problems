# Insert Greatest Common Divisors in Linked List

## Description

We are given a linked list of integers. Between each pair of nodes, insert a new node that's GCD of them.

## Example

```
input  = 18 -> 6 -> 10 -> 3
output = 18 -> 6 -> 6 -> 2 -> 10 -> 1 -> 3
```

## Solution

??? "6ms, beats 15.63%"

    ```kotlin
    fun insertGreatestCommonDivisors(head: ListNode?): ListNode? {
      var prev = head
      var curr = head?.next
      while (curr != null) {
        prev?.next = ListNode(gcd(prev.`val`, curr.`val`))
        prev?.next?.next = curr
        prev = curr
        curr = curr.next
      }
      return head
    }

    private fun gcd(x: Int, y: Int): Int {
      var (a, b) = x to y
      while (b != 0) {
        val t = b
        b = a % b
        a = t
      }
      return a
    }
    ```

??? "3ms, beats 40.63%"

    ```kotlin
    fun insertGreatestCommonDivisors(head: ListNode?): ListNode? {
      var prev = head
      var curr = head!!.next
      while (curr != null) {
        prev!!.next = ListNode(gcd(prev.`val`, curr.`val`))
        prev.next!!.next = curr
        prev = curr
        curr = curr.next
      }
      return head
    }

    private fun gcd(x: Int, y: Int): Int {
      var (a, b) = x to y
      while (b != 0) {
        val t = b
        b = a % b
        a = t
      }
      return a
    }
    ```

??? "2ms, beats 100.00%"

    ```kotlin
    fun insertGreatestCommonDivisors(head: ListNode?): ListNode? {
      var cursor = head
      while (cursor != null) {
        val next = cursor.next
        if (next != null) {
          cursor.next = ListNode(gcd(cursor.`val`, next.`val`))
          cursor.next!!.next = next
        }
        cursor = next
      }
      return head
    }

    private fun gcd(x: Int, y: Int): Int {
      var a = x
      var b = y
      while (b != 0) {
        val t = b
        b = a % b
        a = t
      }
      return a
    }
    ```
