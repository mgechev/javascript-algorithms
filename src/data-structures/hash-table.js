/**
 * Hash Table
 *
 * An associative array, that can map keys
 * (strings and numbers) to values in O(1).
 *
 * @example
 * var hash = require('path-to-algorithms/src/data-structures'+
 * '/hash-table');
 * var HashTable = new hash.HashTable();
 *
 * HashTable.put(10, 'value');
 * HashTable.put('key', 10);
 *
 * console.log(HashTable.get(10)); // 'value'
 * console.log(HashTable.get('key')); // 10
 *
 * HashTable.remove(10);
 * HashTable.remove('key');
 *
 * console.log(HashTable.get(10)); // 'undefined'
 * console.log(HashTable.get('key')); // 'undefined'
 *
 * @module data-structures/hash-table
*/
(function (exports) {
  'use strict';

  exports.HashTable = function () {
    this.elements = [];
  };

  exports.HashTable.prototype.hashCode = function (str) {
    var i;
    var hashCode = 0;
    var character;

    if (str.length === 0) {
      return hashCode;
    }

    for (i = 0; i < str.length; i += 1) {
      character = str.charCodeAt(i);
      /*jshint -W016 */
      hashCode = ((hashCode << 5) - hashCode) + character;
      hashCode = hashCode & hashCode;
      /*jshint -W016 */
    }

    return hashCode;
  };

  exports.HashTable.prototype.put = function (key, value) {
    var hashCode = this.hashCode(key);
    this.elements[hashCode] = value;
  };

  exports.HashTable.prototype.get = function (key) {
    var hashCode = this.hashCode(key);
    return this.elements[hashCode];
  };

  exports.HashTable.prototype.remove = function (key) {
    var hashCode = this.hashCode(key);
    this.elements.splice(hashCode, 1);
  };
})(typeof window === 'undefined' ? module.exports : window);
