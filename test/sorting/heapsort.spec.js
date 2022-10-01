let sortTestCase = require('./sort.testcase.js');
let heapSort = require('../../src/sorting/heapsort.js').heapSort;

sortTestCase(heapSort, 'Heap sort');
