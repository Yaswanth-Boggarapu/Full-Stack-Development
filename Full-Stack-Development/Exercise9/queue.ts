interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
  }
 
  class ArrayQueue<T> implements Queue<T> {
    private data: T[] = [];
 
    enqueue(item: T): void {
      this.data.push(item);
    }
 
    dequeue(): T | undefined {
      return this.data.shift();
    }
 
    peek(): T | undefined {
      return this.data[0];
    }
 
    isEmpty(): boolean {
      return this.data.length === 0;
    }
 
    size(): number {
      return this.data.length;
    }
  }
// Create a queue of strings
const queue: Queue<string> = new ArrayQueue<string>();

// Add some items to the queue
queue.enqueue('Yash');
queue.enqueue('.D');
queue.enqueue('Uzumaki');

// Get the first item in the queue
const firstItem: string | undefined = queue.peek();
console.log(firstItem); // Output: 'apple'

// Remove the first item from the queue
const removedItem: string | undefined = queue.dequeue();
console.log(removedItem); // Output: 'apple'

// Check if the queue is empty
const isEmpty: boolean = queue.isEmpty();
console.log(isEmpty); // Output: false

// Get the current size of the queue
const size: number = queue.size();
console.log(size); // Output: 2