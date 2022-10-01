let sortTestCase = require('./sort.testcase.js');
let selectionSort =
      require('../../src/sorting/selectionsort.js')
      .selectionSort;

sortTestCase(selectionSort, 'Selection sort');
