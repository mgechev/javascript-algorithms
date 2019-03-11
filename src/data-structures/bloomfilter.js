/**
 * Bloomfilter and a bitmap.
 * Probablistic data structure useful for deduplication
 *
 * @example
 * // create a bloom filter with capacity of 1024 and 0.01 error rat
 * var bloomfilter = new Bloomfilter(1024, 0.01);
 * bloomfilter.set('hello');
 * bloomfilter.get('hello') === true;
 * bloomfilter.get('world') === false;
 * @module data-structures/bloomfilter
 */
(function(exports) {
  'use strict';

  function randomUint32() {
    return Math.floor(Math.random() * Math.pow(2, 32));
  }
  /**
   * Calculate a 32 bit FNV-1a hash
   * Found here: https://gist.github.com/vaiorabbit/5657561
   * Ref.: http://isthe.com/chongo/tech/comp/fnv/
   *
   * @param {string} str the input value
   * @param {boolean} [asString=false] set to true to return the hash value as
   *     8-digit hex string instead of an integer
   * @param {integer} [seed] optionally pass the hash of the previous chunk
   * @returns {integer | string}
   */
  function hashFnv32a(str, asString, seed) {
    /*jshint bitwise:false */
    var i;
    var l;
    var hval = seed === undefined ? 0x811c9dc5 : seed;

    for (i = 0, l = str.length; i < l; i = i + 1) {
      hval ^= str.charCodeAt(i);
      hval +=
        (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
    }
    if (asString) {
      // Convert to 8 digit hex string
      return ('0000000' + (hval >>> 0).toString(16)).substr(-8);
    }
    return hval >>> 0;
  }

  // Make a hash function
  function mkHashFun(seed, limit) {
    return function(value) {
      return hashFnv32a(value, false, seed) % limit;
    };
  }
  /**
   * Create a bitmap with a given size
   * Bit map is not resizeable
   * @public
   * @constructor
   * @param {Number} size the size of the bitmap
   */
  exports.Bitmap = function(size) {
    size = size || 1024;
    if (size < 0) {
      throw new Error('The size cannot be negative');
    }
    this.size = size;
    this.intSize = Math.ceil(size / 32); // number of underlying integers
    // Create a 0 initialized array
    this.intArray = Array.from({ length: this.intSize }, function() {
      return 0;
    });
  };

  /**
   * Get the size of the bit map
   * @public
   * @return {Number} size of the bit map
   */
  exports.Bitmap.prototype.getSize = function() {
    return this.size;
  };

  /**
   * Get if a bit is set at a particular index
   * @public
   * @return {Boolean} true or false value of the bit
   */
  exports.Bitmap.prototype.exists = function(index) {
    // Necessary boundary check
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bound')
    }

    // Calculate the offset within the int
    var intOffset = index % 32;
    var arrayOffset = Math.floor(index / 32); // the offset for the array
    var mask = 1 << intOffset;
    return (mask & this.intArray[arrayOffset]) !== 0;
  };

  /**
   * Get the bit at a particular index
   * @public
   * @return {Number} true or false value of the bit
   */
  exports.Bitmap.prototype.get = function(index) {
    // Necessary boundary check
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bound')
    }

    // Calculate the offset within the int
    var intOffset = index % 32;
    var arrayOffset = Math.floor(index / 32); // the offset for the array
    var mask = 1 << intOffset;
    if ((mask & this.intArray[arrayOffset]) !== 0) {
      return 1;
    } else {
      return 0;
    }
  };

  /**
   * Set the bit at a particular index
   * @public
   * @param {Number} index the index to set
   * @param {Boolean} value the value that is necessary
   */
  exports.Bitmap.prototype.set = function(index, value) {
    // necessary boundary check
    if (index < 0 || index > this.size) {
      throw new Error('Index out of bound')
    }

    var intOffset = index % 32; //calculate the offset within the int
    var arrayOffset = Math.floor(index / 32); // the offset for the array
    var mask = 1 << intOffset;

    // Check trutyness
    if (value) {
      this.intArray[arrayOffset] |= mask; // or operation
    } else {
      this.intArray[arrayOffset] &= ~mask; // and opertation to set 0
    }
  };

  /**
   * Construct a bloom filter by given the capacity and the error rate, default error rate is 0.001
   * @public
   * @constructor
   * @param {Number} capacity the maximum capacity to maintain the given error rate
   * @param {Number} errorRate the error rate expected under maximum capacity
   */
  exports.Bloomfilter = function(capacity, errorRate) {
    errorRate = errorRate || 0.001; // default error rate
    if (errorRate > 1 || errorRate < 0) {
      throw new Error('The error rate range is outside of bound');
    }
    if (capacity < 0) {
      throw new Error('The capacity cannot be negative');
    }
    this.capacity = capacity;
    this.errorRate = errorRate;

    // Calculate the optimal size of the bitmap
    var numBit = Math.ceil(
      (capacity * Math.log(1.0 / errorRate)) / Math.pow(Math.log(2), 2)
    );

    // Calculate the optimal number of hash functions
    this.numHashFunction = Math.ceil(Math.log(2), numBit / capacity);

    // Create a bitmap
    this.bitmap = new exports.Bitmap(numBit);

    // Generate an array of hash functions
    this.hashFunctions = Array.from(
      { length: this.numHashFunction },
      function() {
        return mkHashFun(randomUint32(), numBit);
      }.bind(this)
    );
  };

  /**
   * To check if an item is in the filter. If it is in, it will return true,
   * if it is not in the filter, highly likely it will return false, but guaranteed
   * @param {Number | String} value the value that we are trying to check in the filter
   */
  exports.Bloomfilter.prototype.get = function(value) {
    value = String(value); // make it string
    var hashes = this.hashFunctions.map(function(hashFct) {
      return hashFct(value);
    });

    // if one of the bits is not set
    for (var i = 0; i < hashes.length; i = i + 1) {
      if (this.bitmap.exists(hashes[i]) === false) {
        return false;
      }
    }
    return true;
  };

  /**
   * To set(put) an item in the bloom filter
   * @public
   * @param {Number | String} value the value that is been set in the filter
   */
  exports.Bloomfilter.prototype.set = function(value) {
    value = String(value); // make it string
    var hashes = this.hashFunctions.map(function(hashFct) {
      return hashFct(value);
    });

    // Set all the corresponding bits
    for (var i = 0; i < hashes.length; i = i + 1) {
      this.bitmap.set(hashes[i], true);
    }
  };
})(typeof window === 'undefined' ? module.exports : window);
