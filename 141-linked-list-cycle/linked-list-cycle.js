/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(head === null) return false;

    let slow = head;
    let fast = head.next;

    while(slow != fast) {
        if(fast === null || fast.next == null) return false;

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;

    return true;
    // Approach 01
    // const set = new Set();
    // let current = head;

    // while(current != null) {
    //     if(set.has(current)) return true;

    //     set.add(current);
    //     current = current.next;
    // }

    // return false;
};