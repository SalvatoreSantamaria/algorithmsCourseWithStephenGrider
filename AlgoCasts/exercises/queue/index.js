// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  // create an array inside the class and initialize an array
  constructor() {
    this.queue_array = [];
  }

  add(record) {
    this.queue_array.unshift(record)
  } 

  remove(record) {
    //returning as well so we can work with this record
    return(this.queue_array.pop(record))
  }
}
module.exports = Queue;
