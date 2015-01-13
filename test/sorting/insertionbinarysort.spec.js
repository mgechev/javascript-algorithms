var sortTestCase = require('./sort.testcase.js');
var insertionBinarySort =
      require('../../src/sorting/' +
      'insertion-binary-sort.js').insertionBinarySort;

sortTestCase(insertionBinarySort, 'Insertion binary sort');
