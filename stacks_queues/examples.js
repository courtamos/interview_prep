// stack: using linked lists
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }

    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length--;
  }
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Udemy");
myStack.push("Discord");
console.log(myStack);

console.log(myStack.peek());

myStack.pop();
myStack.pop();
console.log(myStack);

// stack: using arrays
class ArrayStack {
  constructor() {
    this.array = [];
  }

  peek() {
    this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
  }

  pop() {
    this.array.pop();
  }
}

const myStack2 = new Stack();

myStack2.push("Facebook");
myStack2.push("Google");
myStack2.push("Slack");
console.log(myStack2);

console.log(myStack2.peek());

myStack2.pop();
myStack2.pop();
console.log(myStack2);
