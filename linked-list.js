class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // Your code here
    const node = new LinkedListNode(val);
    if (!this.head){this.head = node
    }else{
      node.next = this.head;
      this.head = node;

    }
    this.length++;
  }

  addToTail(val) {
    // Your code here
    const node = new LinkedListNode(val);
    let current = this.head; // start at the beginning

    if(current === null){
      this.head = node;
      this.length++;
    }else{
      while(current.next !== null){
        current = current.next;
      }

      current.next = node;
      this.length++;
    }
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
