var sortTestCase = require('./sort.testcase.js');
var bubbleSort =
      require('../../src/sorting/bubblesort.js').bubbleSort;

sortTestCase(bubbleSort, 'Bubble sort');
