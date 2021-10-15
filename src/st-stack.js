const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 module.exports = class Stack {
  push(/* element */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  pop() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  peek() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
// Linked List
function Node(data) {
  this.data = data;
  this.next = null;
}

// Stack implemented using LinkedList
function Stack() {
  this.top = null;
}

Stack.prototype.push = function(data) {
  var newNode = new Node(data);

  newNode.next = this.top; //Special attention
  this.top = newNode;
}

Stack.prototype.pop = function() {
  if (this.top !== null) {
    var topItem = this.top.data;
    this.top = this.top.next;
    return topItem;
  }
  return null;
}

Stack.prototype.print = function() {
  var curr = this.top;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// var stack = new Stack();
// stack.push(3);
// stack.push(5);
// stack.push(7);
// stack.print();

// Queue implemented using LinkedList
function Queue() {
  this.head = null;
  this.tail = null;
}

Queue.prototype.enqueue = function(data) {
  var newNode = new Node(data);

  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
}

Queue.prototype.dequeue = function() {
  var newNode;
  if (this.head !== null) {
    newNode = this.head.data;
    this.head = this.head.next;
  }
  return newNode;
}

Queue.prototype.print = function() {
  var curr = this.head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

var queue = new Queue();
queue.enqueue(3);
queue.enqueue(5);
queue.enqueue(7);
queue.print();
queue.dequeue();
queue.dequeue();
queue.print();
