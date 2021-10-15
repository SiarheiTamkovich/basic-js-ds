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
  constructor(...items){
    this._items = []

    if(items.length>0)
      items.forEach(item => this._items.push(item) )

  }

  push(...items){
    //push item to the stack
     items.forEach(item => this._items.push(item) )
     return this._items;

  }

  pop(count=0){
    //pull out the topmost item (last item) from stack
    if(count===0)
      return this._items.pop()
     else
       return this._items.splice( -count, count )
  }

  peek(){
    // see what's the last item in stack
    return this._items[this._items.length-1]
  }

  size(){
    //no. of items in stack
    return this._items.length
  }

  isEmpty(){
    // return whether the stack is empty or not
    return this._items.length==0
  }

  toArray(){
    return this._items;
  }
}
