/**
 * Constructor function of maximum heap
 *
 * @public
 */
function MaxHeap() {
    this._heap = [];
}

/**
 * Exchange indexes with start index given as argument
 * to turn the heap into valid maxheap. On a single call
 * this method maintains only a single "branch" of the heap
 *
 * @private
 * @param {number} index The parent
 */
MaxHeap.prototype._heapify = function (index) {
    var max = index,
        left = 2 * index + 1,
        right = 2 * index + 2,
        temp;

    if (left < this._heap.length && this._heap[left] > this._heap[index])
        max = left;

    if (right < this._heap.length && this._heap[right] > this._heap[index])
        max = right;

    if (index !== max) {
        temp = this._heap[index];
        this._heap[index] = this._heap[max];
        this._heap[max] = temp;
        this._heapify(max);
    }

}

/**
 * Increases the key for give index
 *
 * @public
 * @param {number} index Index which key should be increased
 * @param {number} value New value of the key
 * @returns {number} parent The new position of the element
 */
MaxHeap.prototype.increaseKey = function (index, value) {
    var elem = this._heap[index],
        parent = Math.floor(index / 2),
        temp;
    if (elem && elem <= value) {
        while (parent >= 0 && elem > this._heap[parent]) {
            temp = this._heap[parent];
            this._heap[parent] = elem;
            this._heap[index] = temp; 
            index = parent;
            parent = Math.floor(parent / 2);
        }
    }
    return parent;
}

/**
 * Adds new element to the heap
 *
 * @public
 * @param {number} value The new value which will be inserted
 * @returns {number}  The index of the inserted value
 */
MaxHeap.prototype.add = function (value) {
    this._heap.push(value);
    return this.increaseKey(this._heap.length - 1, value);
}

/**
 * Gets the current value which is on the top of the heap
 *
 * @public
 * returns {numner}  The current largest value which is on the top of the heap
 */
MaxHeap.prototype.max = function () {
    return this._heap[0];
}

/**
 * Remove and return the current maximum value which is on the top of the heap
 *
 * @public
 * @returns {number} max Extracted value
 */
MaxHeap.prototype.extractMax = function () {
    if (!this._heap.length)
        throw new 'The heap is already empty!';

    var max = this._heap.shift();
    this._heapify(0);
    return max;
}

