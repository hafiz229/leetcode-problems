/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let head = new ListNode(0);
    let currentNode = head;
    let carry = 0;

    while(l1 != null || l2 != null || carry !== 0) {
        const currentList1Node = l1 !== null ? l1.val : 0;
        const currentList2Node = l2 !== null ? l2.val : 0;

        const sum = carry + currentList1Node + currentList2Node;
        carry = Math.floor(sum/10);
        
        currentNode.next = new ListNode(sum%10);
        currentNode = currentNode.next;

        if(l1 !== null) l1 = l1.next;
        if(l2 !== null) l2 = l2.next;
    }

    return head.next;
};