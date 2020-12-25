// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data){
    this.data = data
    this.children = []
  }

  add(data) { //function to add a node
    const node = new Node(data); //create new node with data
    this.children.push(node) //push new node into current nodes children array
  }

  remove(data) { //function to remove
    this.children.filter(node => { //look thru every child
      return node.data !== data; //if node.data is not equal to data, it is kept. filter will reomve all data that is equal to data.
    })
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

module.exports = { Tree, Node };
