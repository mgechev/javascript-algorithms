var array0 = [2,3,5,1,2,4,7,9,0,3,3];
var array1 = [2,3,5,1,2,4,7,9,0,3,3];
var array2 = [2,3,5,1,2,4,7,9,0,3,3];


function insertionSort(array) {
    var current,
        j;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = current;
    }
    return array;
}

/* Works in JS because of the functional scope */
function insertionSort2(array) {
    var key;
    for (var i = 0; i < array.length; i += 1) {
        key = array[i];
        for (var j = i - 1; j >= 0 && key < array[j]; j -= 1) {
            array[j + 1] = array[j];
        }
        array[j + 1] = key;
    }
    return array;
}

/* Works in JS because of the functional scope */
function insertionSortDesc(array) {
    var key;
    for (var i = 1; i < array.length; i += 1) {
        key = array[i];
        for (var j = i - 1; i >= 0 && array[j] < key; j -= 1) {
            array[j + 1] = array[j];
        }
        array[j + 1] = key;
    }
    return array;
}

console.log(insertionSort(array0));
console.log(insertionSort2(array1));
console.log(insertionSortDesc(array2));
