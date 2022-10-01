let sortTestCase = require('./sort.testcase.js');
let insertionBinarySort =
      require('../../src/sorting/' +
      'insertion-binary-sort.js').insertionBinarySort;

sortTestCase(insertionBinarySort, 'Insertion binary sort');
