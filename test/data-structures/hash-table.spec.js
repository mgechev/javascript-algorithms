var mod = require('../../src/data-structures/hash-table.js');
var Node = mod.Node;
var Hashtable = mod.Hashtable;

describe('Node', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
});

describe('Hash table', function () {
  'use strict';

  it('should be a constructor function.', function () {
    expect(typeof Hashtable).toBe('function');
  });
  it('should start with empty table.', function () {
    expect(new Hashtable().buckets.length).toBe(0);
  });
  it('should put() K(int):V in table properly.', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value');
    expect(hashTable.buckets[10].data).toBe('value');
  });
  it('should put() K(string):V in table properly.', function () {
    var hashTable = new Hashtable();
    hashTable.put('key', 'value');
    /*
      'key' hashCode()'s to 106079. Then the hash is adjusted to fit
      the number of configurable buckets (array size).
      106079 % 100 (100 is default maxBucketCount)
      result is 79.
      This is done to avoid using get() since it's untested at this point.
    */
    expect(hashTable.buckets[79].data).toBe('value');
  });
  it('should put() multiple K(int):Vs with hash collisions in properly (1).', function () {
    var hashTable = new Hashtable();
    // Same hash so going to same bucket, but different keys. Collision.
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    /*
      'someHash' hashCode()'s to 1504481314. Then the hash is adjusted to fit
      the number of configurable buckets (array size).
      1504481314 % 100 (100 is default maxBucketCount)
      result is 14.
      This is done to avoid using get() since it's untested at this point.
    */
    expect(hashTable.buckets[14].data).toBe('value');
    expect(hashTable.buckets[14].next.data).toBe('anotherValue');
  });
  it('should put() multiple K(int):Vs with hash collisions in properly (2).', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    hashTable.put(77, 'lastValue', 'someHash');
    expect(hashTable.buckets[14].data).toBe('value');
    expect(hashTable.buckets[14].next.data).toBe('anotherValue');
    expect(hashTable.buckets[14].next.next.data).toBe('lastValue');
  });
  it('should put() multiple K(string):Vs with hash collisions in properly (1).', function () {
    var hashTable = new Hashtable();
    // Same hash so going to same bucket, but different keys. Collision.
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    /*
      'someHash' hashCode()'s to 1504481314. Then the hash is adjusted to fit
      the number of configurable buckets (array size).
      1504481314 % 100 (100 is default maxBucketCount)
      result is 14.
      This is done to avoid using get() since it's untested at this point.
    */
    expect(hashTable.buckets[14].data).toBe('value');
    expect(hashTable.buckets[14].next.data).toBe('anotherValue');
  });
  it('should put() multiple K(string):Vs with hash collisions in properly (2).', function () {
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    hashTable.put('keyC', 'lastValue', 'someHash');
    expect(hashTable.buckets[14].data).toBe('value');
    expect(hashTable.buckets[14].next.data).toBe('anotherValue');
    expect(hashTable.buckets[14].next.next.data).toBe('lastValue');
  });
  it('should get() a K(int):V from table properly.', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value');
    expect(hashTable.get(10)).toBe('value');
  });
  it('should get() a K(string):V from table properly.', function () {
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value');
    expect(hashTable.get('keyA')).toBe('value');
  });
  it('should get() a K(int):V with collisions from table properly (1).', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    expect(hashTable.get(35, 'someHash')).toBe('anotherValue');
  });
  it('should get() a K(int):V with collisions from table properly (2).', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    hashTable.put(77, 'lastValue', 'someHash');
    expect(hashTable.get(77, 'someHash')).toBe('lastValue');
  });
  it('should get() a K(int):V with collisions from table properly (3).', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    hashTable.put(77, 'lastValue', 'someHash');
    expect(hashTable.get(35, 'someHash')).toBe('anotherValue');
  });
  it('should get() a K(int):V with collisions from table properly (4).', function () {
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    hashTable.put(77, 'lastValue', 'someHash');
    expect(hashTable.get(10, 'someHash')).toBe('value');
  });
  it('should get() a K(string):V with collisions from table properly (1).', function () {
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    expect(hashTable.get('keyB', 'someHash')).toBe('anotherValue');
  });
  it('should get() a K(string):V with collisions from table properly (2).', function () {
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    hashTable.put('keyC', 'lastValue', 'someHash');
    expect(hashTable.get('keyC', 'someHash')).toBe('lastValue');
  });
  it('should get() a K(string):V with collisions from table properly (3).', function () {
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    hashTable.put('keyC', 'lastValue', 'someHash');
    expect(hashTable.get('keyB', 'someHash')).toBe('anotherValue');
  });
  it('should get() a K(string):V with collisions from table properly (4).', function () {
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    hashTable.put('keyC', 'lastValue', 'someHash');
    expect(hashTable.get('keyA', 'someHash')).toBe('value');
  });
  it('should remove() a K(int):V from table properly (1).', function () {
    // remove only node/link in bucket : (B)
    var hashTable = new Hashtable();
    hashTable.put(10, 'value');
    hashTable.remove(10);
    expect(hashTable.get(10)).toBe(undefined);
  });
  it('should remove() a K(int):V with collisions from table properly (2).', function () {
    // remove start node/link in bucket : (B) - A
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    expect(hashTable.remove(10, 'someHash')).toBe('value');
    expect(hashTable.get(35, 'someHash')).toBe('anotherValue');
    expect(hashTable.get(10, 'someHash')).toBe(undefined);
  });
  it('should remove() a K(int):V with collisions from table properly (3).', function () {
    // remove start node/link in bucket : (B) - A - C
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    hashTable.put(66, 'lastValue', 'someHash');
    expect(hashTable.remove(10, 'someHash')).toBe('value');
    expect(hashTable.get(35, 'someHash')).toBe('anotherValue');
    expect(hashTable.get(66, 'someHash')).toBe('lastValue');
  });
  it('should remove() a K(int):V with collisions from table properly (4).', function () {
    // remove middle node/link in bucket : A - (B) - C
    var hashTable = new Hashtable();
    hashTable.put(10, 'value', 'someHash');
    hashTable.put(35, 'anotherValue', 'someHash');
    hashTable.put(66, 'lastValue', 'someHash');
    expect(hashTable.remove(35, 'someHash')).toBe('anotherValue');
    expect(hashTable.get(10, 'someHash')).toBe('value');
    expect(hashTable.get(66, 'someHash')).toBe('lastValue');
  });
  it('should remove() a K(string):V from table properly (1).', function () {
    // remove only node/link in bucket : (B)
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value');
    hashTable.remove('keyA');
    expect(hashTable.get('keyA')).toBe(undefined);
  });
  it('should remove() a K(string):V with collisions from table properly (2).', function () {
    // remove start node/link in bucket : (B) - A
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    expect(hashTable.remove('keyA', 'someHash')).toBe('value');
    expect(hashTable.get('keyB', 'someHash')).toBe('anotherValue');
    expect(hashTable.get('keyA', 'someHash')).toBe(undefined);
  });
  it('should remove() a K(string):V with collisions from table properly (3).', function () {
    // remove start node/link in bucket : (B) - A - C
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    hashTable.put('keyC', 'lastValue', 'someHash');
    expect(hashTable.remove('keyA', 'someHash')).toBe('value');
    expect(hashTable.get('keyB', 'someHash')).toBe('anotherValue');
    expect(hashTable.get('keyC', 'someHash')).toBe('lastValue');
  });
  it('should remove() a K(string):V with collisions from table properly (4).', function () {
    // remove middle node/link in bucket : A - (B) - C
    var hashTable = new Hashtable();
    hashTable.put('keyA', 'value', 'someHash');
    hashTable.put('keyB', 'anotherValue', 'someHash');
    hashTable.put('keyC', 'lastValue', 'someHash');
    expect(hashTable.remove('keyB', 'someHash')).toBe('anotherValue');
    expect(hashTable.get('keyA', 'someHash')).toBe('value');
    expect(hashTable.get('keyC', 'someHash')).toBe('lastValue');
  });
});
