let sortTestCase = require('./sort.testcase.js');
let bubbleSort =
      require('../../src/sorting/bubblesort.js').bubbleSort;

sortTestCase(bubbleSort, 'Bubble sort');
