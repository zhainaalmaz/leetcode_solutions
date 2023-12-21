class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  //add element to top of stack

  push(element) {
    this.items[this.count] = element;
    this.count += 1;
    console.log(`${element} added to ${this.count}`);
    return this.count - 1;
  }

  //return and remove top element in stack
  //return undefined if stack is empty

  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  //check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  //check if stack is empty

  isEmpty() {
    console.log(this.count === 0 ? "Stack is empty" : "Stack is not Empty");
    return (this.count = 0);
  }
  //check the size of element
  size() {
    console.log(`${this.count} elem`);
    return this.count;
  }

  // Print elements in stack

  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.size();
stack.peek();
stack.push(30);
console.log(stack.print());
stack.pop();
console.log(stack.clear());
stack.isEmpty();
