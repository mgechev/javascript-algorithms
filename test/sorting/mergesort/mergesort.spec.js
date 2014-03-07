var sortTestCase = require('../sort.testcase.js'),
    mergeSort = require('../../../src/sorting/mergesort/mergesort.js').mergeSort;

sortTestCase(mergeSort, 'Merge sort');