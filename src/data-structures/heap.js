(function (exports) {
  'use strict';

  /**
   * Constructor function of minimum heap
   *
   * @public
   * @param {function} Function used for comparition between the elements
   */
  function Heap(cmp) {
    this._heap = [];
    if (typeof cmp === 'function') {
      this._cmp = cmp;
    } else {
      this._cmp = function (a, b) {
        return a - b;
      };
    }
  }

  /**
   * Exchange indexes with start index given as argument
   * to turn the tree into a valid heap. On a single call
   * this method maintains only a single "branch" of the heap.
   * Complexity O(log n)
   *
   * @private
   * @param {number} index The parent
   */
  Heap.prototype._heapify = function (index) {
    var extr = index,
        left = 2 * index + 1,
        right = 2 * index + 2,
        temp;

    if (left < this._heap.length &&
        this._cmp(this._heap[left], this._heap[index]) > 0) {
      extr = left;
    }

    if (right < this._heap.length &&
        this._cmp(this._heap[right], this._heap[index]) > 0) {
      extr = right;
    }

    if (index !== extr) {
      temp = this._heap[index];
      this._heap[index] = this._heap[extr];
      this._heap[extr] = temp;
      this._heapify(extr);
    }
  };

  /**
   * Changes the key for give index. Complexity O(log n).
   *
   * @public
   * @param {number} index Index which key should be changed
   * @param {number} value New value of the key
   * @returns {number} parent The new position of the element
   */
  Heap.prototype.changeKey = function (index, value) {
    this._heap[index] = value;
    var elem = this._heap[index],
        parent = Math.floor(index / 2),
        temp;
    if (elem !== undefined) {
      while (parent >= 0 && this._cmp(elem, this._heap[parent]) > 0) {
        temp = this._heap[parent];
        this._heap[parent] = elem;
        this._heap[index] = temp;
        index = parent;
        parent = Math.floor(parent / 2);
      }
    }
    return parent;
  };

  /**
   * Updates given node. This operation is useful
   * in algorithms like Dijkstra, A* where we need
   * to decrease/increase the value of givne node.
   */
  Heap.prototype.update = function (node) {
    var idx = this._heap.indexOf(node);
    if (idx >= 0) {
      this.changeKey(idx, node);
    }
  };

  /**
   * Adds new element to the heap. Complexity O(log n).
   *
   * @public
   * @param {number} value The new value which will be inserted
   * @returns {number}  The index of the inserted value
   */
  Heap.prototype.add = function (value) {
    this._heap.push(value);
    return this.changeKey(this._heap.length - 1, value);
  };

  /**
   * Gets the current value which is on the top of the heap. Complexity O(1).
   *
   * @public
   * returns {numner} The current top value.
   */
  Heap.prototype.top = function () {
    return this._heap[0];
  };

  /**
   * Removes and returns the current extremum value
   * which is on the top of the heap.
   * Complexity O(log n).
   *
   * @public
   * @returns {number} The extremum value
   */
  Heap.prototype.extract = function () {
    if (!this._heap.length) {
      throw 'The heap is already empty!';
    }

    var extr = this._heap.shift();
    this._heapify(0);
    return extr;
  };

  Heap.prototype.getCollection = function () {
    return this._heap;
  };

  Heap.prototype.isEmpty = function () {
    return !this._heap.length;
  };

  exports.Heap = Heap;

}(typeof exports === 'undefined' ? window : exports));
