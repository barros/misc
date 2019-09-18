/*
  Linked List implementation of a Queue data structure --
  Scales better in comparison to an array implementation of a queue. 
  An array's .shift & .unshift methods become expensive at scale. 
  Enqueuing and dequeuing will have a O(1) constant runtime with this implementation.
*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor(capacity) {
    this.first = null;
    this.last = null;
    this.count = 0;
    this.capacity = capacity;

    // Add node to the end of list
    this.add = function (data) {
      if (this.count < this.capacity) {
        let node = new Node(data);
        if (this.first === null || this.last === null) {
          this.first = node;
          this.last = node;
        }
        else {
          this.last.next = node;
          this.last = this.last.next;
        }
        this.count++;
        console.log(`Added '${data}' to the queue - new queue size: ${this.count}`);
        return this.getSize();
      }
      console.log(`Could not add next element - max capacity (${this.capacity}) reached`);
      return null;
    };

    // Remove node at the head of list
    this.remove = function () {
      if (this.first === null || this.last === null) {
        console.log('Queue is empty - nothing to remove');
        return null;
      }
      if (this.first === this.last) {
        let val = this.first.data;
        this.first = null;
        this.last = null;
        return val;
      }
      let val = this.first.data;
      this.first = this.first.next;
      this.count--;
      return val;
    };

    // Peek the next element to be removed from the queue (front of queue)
    this.peek = function () {
      if (this.first) {
        return this.first.data;
      }
      console.log('Queue is empty - nothing to peek');
      return null;
    };

    // Return true if the queue contains the input value
    this.contains = function (data) {
      let start = this.first;
      while (start) {
        if (start.data === data)
          return true;
        start = start.next;
      }
      console.log(`Queue does not contain ${data}`);
      return false;
    };

    // Returns the size of the queue
    this.getSize = function () {
      return this.count;
    };
    
    // Returns all of the nodes in the queue
    this.toString = function () {
      let start = this.first;
      let res = [];
      while (start) {
        res.push(start.data);
        start = start.next;
      }
      return res.join(', ');
    };
  }
}

let q = new Queue(5);
q.add(10);
q.add(20);
q.add(30);
q.add(40);
q.add(50);
q.add(60); // will not add because capacity is reached
q.remove(); // => 10
q.toString(); // => 20, 30, 40, 50