var sortTestCase = require('./sort.testcase.js');
var heapSort = require('../../src/sorting/heapsort.js').heapSort;

sortTestCase(heapSort, 'Heap sort');
