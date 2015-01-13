var sortTestCase = require('./sort.testcase.js');
var mergeSort =
      require('../../src/sorting/mergesort.js').mergeSort;

sortTestCase(mergeSort, 'Merge sort');
