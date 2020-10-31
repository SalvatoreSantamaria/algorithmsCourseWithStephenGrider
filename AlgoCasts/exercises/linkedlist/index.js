// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) { // defaulting to null
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    const node = new Node(data, this.head); //make a new node, and with this.head  passing into 'next' this sets this to be the first node
    this.head = node; //update the reference to set this current node to head

  }
}

// in practice:
// const list = new LinkedList(); //create new LinkedList, head is null
// list.head = new Node(10) //set the head to have a node with data:10 and of course next = null

module.exports = { Node, LinkedList };
