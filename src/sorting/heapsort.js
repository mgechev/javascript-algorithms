var heapSort = (function () {
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

    function buildMaxHeap(array) {
        for (var i = Math.floor(array.length / 2); i >= 0; i -= 1) {
            heapify(array, i, array.length);
        }
        return array;
    }

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

