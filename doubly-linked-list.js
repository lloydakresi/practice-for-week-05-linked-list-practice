class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const node = new DoublyLinkedListNode(val);
    if (!this.head){
      this.head = node; // node is both the first and last in the list
      this.tail = node;
    }else{
      node.next = this.head; // node will point to the current head since it will replace it as the new head pointer
      this.head.prev = node; // node will become #this.head's preceding node since node will be pointing to it
      this.head = node; // node will now become the new head pointer

    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const node = new DoublyLinkedListNode(val);

    if(!this.head){
      this.head = node;
      this.tail = node;
    }else{
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;


  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
