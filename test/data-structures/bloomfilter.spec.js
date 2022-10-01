let mod = require('../../src/data-structures/bloomfilter.js');
let Bitmap = mod.Bitmap;
let Bloomfilter = mod.Bloomfilter;

describe('Bitmap', function() {
  'use strict';

  it('should be able to get and set values', function() {
    let bitmap = new Bitmap(1024);
    expect(bitmap.exists(0)).toBe(false);
    bitmap.set(0, true);
    expect(bitmap.exists(0)).toBe(true);
    expect(bitmap.exists(1023)).toBe(false);
    bitmap.set(1023, 1);
    expect(bitmap.exists(1023)).toBe(true);
  });

  it('should be able to change everthing back', function() {
    let bitmap = new Bitmap(2048);
    for (let i = 0; i < 2048; i = i + 1) {
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
    let bloomfilter = new Bloomfilter(1024, 0.01);
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
    let bloomfilter = new Bloomfilter(4096, 0.001); // high precision

    let falsePositive = 0;
    for (let i = 0; i < 1024; i = i + 1) {
      if (bloomfilter.get(i)) {
        falsePositive = falsePositive + 1;
      }
      bloomfilter.set(i, true);
      expect(bloomfilter.get(i)).toBe(true);
    }
    expect(falsePositive).toBeLessThan(100); // set a high theshold
  });
});
