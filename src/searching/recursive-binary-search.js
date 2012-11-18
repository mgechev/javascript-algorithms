var array = [5, 8, 53, 56, 123, 322, 400, 2356, 8000, 23333];

function binarySearch(array, key) {
    return recursiveBinarySearch(array, key, 0, array.length);
}

function recursiveBinarySearch(array, key, left, right) {
    if (left > right)
        return -1;
    var middle = Math.floor((right + left) / 2);
    if (array[middle] === key)
        return middle;
    else if (array[middle] > key) 
        return recursiveBinarySearch(array, key, left, middle - 1);
    else
        return recursiveBinarySearch(array, key, middle + 1, right);
}

console.log(array);
console.log(5, binarySearch(array, 5));
console.log(8, binarySearch(array, 8));
console.log(53, binarySearch(array, 53));
console.log(56, binarySearch(array, 56));
console.log(123, binarySearch(array, 123));
console.log(322, binarySearch(array, 322));
console.log(400, binarySearch(array, 400));
console.log(2356, binarySearch(array, 2356));
console.log(8000, binarySearch(array, 8000));
console.log(8001, binarySearch(array, 8001));
console.log(23333, binarySearch(array, 23333));
