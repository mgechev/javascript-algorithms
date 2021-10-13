(function (exports) {
    'use strict';

    /**
     * Searches for specific element in a given array
     * using the linear search algorithm
     * Time complexity: O(n)
     * 
     * @param {Array} array Input array
     * @param {Number} key the number whose index is to be found
     * @returns {Number} the index of the first instance of number or else -1 if not found
     */

    const linearSearch = (array, key) => {
        for (let i = 0; i < array.length; i++) {
            if (array[i] == key) {
                return i;
            }
        }
        return -1;
    }

    exports.linearSearch = linearSearch;
})(typeof window === 'undefined' ? module.exports : window);