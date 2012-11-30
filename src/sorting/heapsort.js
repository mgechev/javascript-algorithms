var array = [3,4,6,2,3,6,8,9];

/**
 * The heapsort algorithm. It's complexity is O(nlog n).
 *
 * @public
 */
var heapSort = (function () {

    /**
     * Finds the correct place of given element in given max heap.
     *
     * @private
     * @param {array} array Array
     * @param {number} index Index of the element which palce in the max heap should be find
     */
    function heapify(array, index, heapSize) {
        var left = 2 * index + 1,
            right = 2 * index + 2,
            largest = index;
     
        if (left < heapSize && array[left] > array[index])
            largest = left;

        if (right < heapSize && array[right] > array[largest])
            largest = right;
     
        if (largest !== index) {
            var temp = array[index];
            array[index] = array[largest];
            array[largest] = temp;
            heapify(array, largest, heapSize);
        }
    }

    /**
     * Builds max heap from a given array.
     *
     * @private
     * @param {array} array Array which should be turned into max heap
     * @returns {array} array Array turned into max heap
     */
    function buildMaxHeap(array) {
        for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
            heapify(array, i, array.length);
        }
        return array;
    }

    /**
     * Heapsort. Turns the input array into a max heap and after that sorts it.
     *
     * @public
     * @param {array} array Input array
     * @returns {array} array Sorted array
     */
    return function (array) {
        var size = array.length,
            temp;
        buildMaxHeap(array);
        for (var i = array.length - 1; i > 0; i -= 1) {
            temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            size -= 1;
            heapify(array, 0, size);
        }
        return array;
    };
}());

console.log(heapSort(array));
