const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

 let front = null, rear = null;
 
module.exports = class Queue {

  getUnderlyingList() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(key){
    
    // Create a new LL node
        let temp = new QNode(key);
   
        // If queue is empty, then new node is front and rear both
        if (rear == null) {
            front = rear = temp;
            return;
        }
   
        // Add the new node at the end of queue and change rear
        rear.next = temp;
        rear = temp;
    }


    dequeue() {
    
      // If queue is empty, return NULL.
          if (front == null)
              return;
     
          // Store previous front and move front one node ahead
          let temp = front;
          front = front.next;
     
          // If front becomes NULL, then change rear also as NULL
          if (front == null)
              rear = null;
       }

}

class QNode
{
    constructor(key)
    {
        this.key = key;
        this.next = null;
    }
}

const queue = new Queue();
