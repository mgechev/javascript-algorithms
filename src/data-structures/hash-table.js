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
 * console.log(HashTable.get(10)); // null
 * console.log(HashTable.get('key')); // null
 *
 * @module data-structures/hash-table
*/
(function (exports) {
  'use strict';

  exports.Node = function (key, data) {
    this.key = key;
    this.data = data;
    this.next = null;
    this.prev = null;
  };

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

  exports.HashTable.prototype.put = function (key, data) {
    var hashCode = this.hashCode(key);
    var newNode = new Node(key, data);

    if (this.elements[hashCode] === null) {
      this.elements[hashCode] = newNode;
    } else {
      var first = this.elements[hashCode];

      while (first.next !== null) {
        first = first.next;
      }

      first.next = newNode;
      newNode.prev = first;
    }
  };

  exports.HashTable.prototype.get = function (key) {
    var hashCode = this.hashCode(key);

    if (this.elements[hashCode] === null) {
      return null;
    } else if (this.elements[hashCode].next === null) {
      return this.elements[hashCode];
    } else {
      var first = this.elements[hashCode];

      while (first.key !== key) {
        first = first.next;
      }

      return first;
    }
  };

  exports.HashTable.prototype.remove = function (key) {
    var hashCode = this.hashCode(key);

    if (this.elements[hashCode] === null) {
      return false;
    } else if (this.elements[hashCode].next === null) {
      this.elements.splice(hashCode, 1);
      return true;
    } else {
      var first = this.elements[hashCode];

      while (first.key !== key) {
        first = first.next;
      }

      if (first.next !== null) {
        first.next.prev = first.prev;
      }

      first.prev.next = first.next;
    }
  };
})(typeof window === 'undefined' ? module.exports : window);
