var sortTestCase = require('../sort.testcase.js'),
    heapSort = require('../../../src/sorting/heapsort/heapsort.js').heapSort;

sortTestCase(heapSort, 'Heap sort');