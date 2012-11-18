var array = [5,6,3,3,6,8,9,4,3];

function insertionBinarySort(array) {
    var current,
        middle,
        left,
        right;
    for (var i = 1; i < array.length; i += 1) {
        current = array[i];
        left = 0;
        right = i;
        middle = Math.floor((left + right) / 2);
        while (left < right) {
            if (array[middle] <= current) 
                left = middle + 1;
            else 
                right = middle - 1;
            middle = Math.floor((left + right) / 2);
        }
        for (var j = i; j > middle; j -= 1) 
            array[j] = array[j - 1];
        array[j] = current;
    }
    return array;
}

console.log(insertionBinarySort(array));
