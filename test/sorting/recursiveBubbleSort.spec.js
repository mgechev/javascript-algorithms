var sortTestCase = require('./sort.testcase.js');
var recursiveBubbleSort =
      require('../../src/sorting/recursive-bubblesort.js').recursiveBubbleSort;

sortTestCase(recursiveBubbleSort, 'Recursive Bubble sort');
