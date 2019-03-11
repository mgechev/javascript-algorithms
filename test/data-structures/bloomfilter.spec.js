var mod = require('../../src/data-structures/bloomfilter.js');
var Bitmap = mod.Bitmap;
var Bloomfilter = mod.Bloomfilter;

describe('Bitmap', function() {
  'use strict';

  it('should be able to get and set values', function() {
    var bitmap = new Bitmap(1024);
    expect(bitmap.exists(0)).toBe(false);
    bitmap.set(0, true);
    expect(bitmap.exists(0)).toBe(true);
    expect(bitmap.exists(1023)).toBe(false);
    bitmap.set(1023, 1);
    expect(bitmap.exists(1023)).toBe(true);
  });

  it('should be able to change everthing back', function() {
    var bitmap = new Bitmap(2048);
    for (var i = 0; i < 2048; i = i + 1) {
      expect(bitmap.get(i)).toBe(0);
      bitmap.set(i, 1);
      expect(bitmap.get(i)).toBe(1);
      bitmap.set(i, 0);
      expect(bitmap.get(i)).toBe(0);
    }
  });
});

describe('Bloomfilter', function() {
  'use strict';
  it('should be able to identify duplicates', function() {
    var bloomfilter = new Bloomfilter(1024, 0.01);
    expect(bloomfilter.get('a')).toBe(false);
    expect(bloomfilter.get('b')).toBe(false);
    bloomfilter.set('a');
    expect(bloomfilter.get('a')).toBe(true);
    expect(bloomfilter.get('b')).toBe(false);
    bloomfilter.set('b');
    expect(bloomfilter.get('a')).toBe(true);
    expect(bloomfilter.get('b')).toBe(true);
  });

  it('should handle large amount of data inside', function() {
    var bloomfilter = new Bloomfilter(4096, 0.001); // high precision

    var falsePositive = 0;
    for (var i = 0; i < 1024; i = i + 1) {
      if (bloomfilter.get(i)) {
        falsePositive = falsePositive + 1;
      }
      bloomfilter.set(i, true);
      expect(bloomfilter.get(i)).toBe(true);
    }
    expect(falsePositive).toBeLessThan(100); // set a high theshold
  });
});
