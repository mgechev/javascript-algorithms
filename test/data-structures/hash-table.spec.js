var HashTable = require('../../src/data-structures/hash-table').HashTable;

describe('HashTable', function () {
  'use strict';
  it('should be defined as constructor function', function () {
    expect(typeof HashTable).toBe('function');
    var hash = new HashTable();
    expect(hash instanceof HashTable).toBeTruthy();
    expect(hash.constructor.name).toBe('HashTable');
  });

  describe('methods', function () {
    it('should define a put and get methods', function () {
      var hash = new HashTable();
      expect(typeof hash.put).toBe('function');
      expect(typeof hash.get).toBe('function');
      hash.put('key', 'value');
      expect(hash.get('key')).toBe('value');
      hash.put('key', 'foo');
      expect(hash.get('key')).toBe('foo');
      hash.put('bar', 'baz');
      expect(hash.get('bar')).toBe('baz');
    });

    it('should define a remove method', function () {
    });
  });
});
