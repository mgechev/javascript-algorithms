let sortTestCase = require('./sort.testcase.js');
let mergeSort =
      require('../../src/sorting/mergesort.js').mergeSort;

sortTestCase(mergeSort, 'Merge sort');
