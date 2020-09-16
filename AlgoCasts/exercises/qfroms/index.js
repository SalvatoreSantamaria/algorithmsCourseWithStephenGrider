// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue { 
 constructor() {
   this.first = new Stack(); //rememeber first or second can be called anything
   this.second = new Stack();
 }

  add(record) { //record can be called anything
    this.first.push(record)
  }

  remove() { // remove all the records from first and move them to second
    while(this.first.peek()) { //while a record exists
      this.second.push(this.first.pop());
    }
    const record = this.second.pop();
    while(this.second.peek()) { //return back to original state
      this.first.push(this.second.pop());
    }
    return record;
  }

  peek(){
    while (this.first.peek()){
      this.second.push(this.first.pop())
    }

    //get reference to top record inside of second
    const record = this.second.peek();
    while(this.second.peek()) { //return back to original state
      this.first.push(this.second.pop());
    }
  return record
  }

}

module.exports = Queue;
