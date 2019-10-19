var sortTestCase = require('./sort.testcase.js');
var bogoSort =
      require('../../src/sorting/bogosort.js').bogoSort;

sortTestCase(bogoSort, 'Bogosort');
