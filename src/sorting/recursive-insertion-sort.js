var array = [4,6,2,2,4,56,7,7,51,23,5,7];

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
