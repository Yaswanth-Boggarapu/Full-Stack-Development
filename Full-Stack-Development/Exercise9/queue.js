var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        this.data = [];
    }
    ArrayQueue.prototype.enqueue = function (item) {
        this.data.push(item);
    };
    ArrayQueue.prototype.dequeue = function () {
        return this.data.shift();
    };
    ArrayQueue.prototype.peek = function () {
        return this.data[0];
    };
    ArrayQueue.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    ArrayQueue.prototype.size = function () {
        return this.data.length;
    };
    return ArrayQueue;
}());
// Create a queue of strings
var queue = new ArrayQueue();
// Add some items to the queue
queue.enqueue('Yash');
queue.enqueue('.D');
queue.enqueue('Uzumaki');
// Get the first item in the queue
var firstItem = queue.peek();
console.log(firstItem); // Output: 'Yash'
// Remove the first item from the queue
var removedItem = queue.dequeue();
console.log(removedItem); // Output: 'Yash'
// Check if the queue is empty
var isEmpty = queue.isEmpty();
console.log(isEmpty); // Output: false
// Get the current size of the queue
var size = queue.size();
console.log(size); // Output: 2
//# sourceMappingURL=queue.js.map