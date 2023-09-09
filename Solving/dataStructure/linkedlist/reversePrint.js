const SinglyLinkedListNode = class {
  constructor(nodeData) {
    this.data = nodeData;
    this.next = null;
  }
};

const SinglyLinkedList = class {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertNode(nodeData) {
    const node = new SinglyLinkedListNode(nodeData);

    if (this.head == null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }
};

function reversePrint(llist) {
  // Write your code here
  const reverse = [];
  let temp = llist;
  while (temp !== null) {
    reverse.push(temp.data);
    temp = temp.next;
  }
  for (let i = reverse.length - 1; i >= 0; i--) {
    console.reverse(arr[i]);
    arr.pop();
  }
}

function main() {
  let llist = new SinglyLinkedList();
  llist.insertNode(16);
  llist.insertNode(12);
  llist.insertNode(4);
  llist.insertNode(2);
  llist.insertNode(5);
  reversePrint(llist.head);
}
