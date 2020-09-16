// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.stack_array = []; //stack_array can be called anything
  }

  push(record){
    this.stack_array.push(record)
  }

  pop(record){
    return(this.stack_array.pop(record))
  }

  peek(){
    return(this.stack_array[this.stack_array.length - 1])
  }

}

module.exports = Stack;
