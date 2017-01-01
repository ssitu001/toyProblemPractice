// Remove duplicate nodes from linked list of integers while keeping only the first occurrence of duplicates.
// Runtime Complexity
// Linear, O(n) - where 'n' is length of the linked list.

// Memory Complexity
// Linear, O(n) - to store visited nodes in hashset.

function LinkedList(val) {
  this.val = val;
  this.next = null;
}

function removeDupesLL(head) {
  const hash = {};

  let curr = head;

  hash[curr.val] = true;

  while (curr.next) {
    if (!hash[curr.next.val]) {
      hash[curr.next.val] = true;
      curr = curr.next;
    } else {
      //delete curr node
      curr.next = curr.next.next;
    }
  }
  return head;

}

let newLL = new LinkedList(7);
newLL.next = new LinkedList(7);
newLL.next.next = new LinkedList(28);
newLL.next.next.next = new LinkedList(28);
newLL.next.next.next.next = new LinkedList(14);
newLL.next.next.next.next.next = new LinkedList(21);


removeDupesLL(newLL)