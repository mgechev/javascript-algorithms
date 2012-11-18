var array = [2,3,1,1,2,4,6,7,8,2,3,5,6,8];

function selectionSort(array) {
    var min,
        idx,
        temp;
    for (var i = 0; i < array.length; i += 1) {
       min = Infinity;
       for (var j = i + 1; j < array.length; j += 1) {
           if (min > array[j]) {
               min = array[j];
               idx = j;
           }
       }
       temp = array[idx];
       array[idx] = array[i];
       array[i] = temp;
    }
    return array;
}

console.log(selectionSort(array));
