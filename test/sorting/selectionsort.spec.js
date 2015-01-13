var sortTestCase = require('./sort.testcase.js');
var selectionSort =
      require('../../src/sorting/selectionsort.js')
      .selectionSort;

sortTestCase(selectionSort, 'Selection sort');
