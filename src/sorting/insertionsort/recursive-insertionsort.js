var array = [4,6,2,2,4,56,7,7,51,23,5,7];

/**
 * Recursive version of insertionsort. Complexity O(n^2).
 *
 * @public
 * @param {array} array Input array
 * @param {number} [max] Index of the element which place we should find in the current function call
 */
function recursiveInsertionSort(array, max) {
    if (max <= 0)
        return array;
    if (max === undefined) 
        max = array.length - 1;
    recursiveInsertionSort(array, max - 1);
    for (var i = max - 1, current = array[max]; i >= 0 && current < array[i]; i -= 1) 
        array[i + 1] = array[i];
    array[i + 1] = current;
    return array;
}

console.log(recursiveInsertionSort(array));
