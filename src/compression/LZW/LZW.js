/**
 * LZW Encoding/Decoding
 *
 * Lempel–Ziv–Welch (LZW) is a universal lossless data
 * compression algorithm. It is an improved implementation
 * of the LZ78 algorithm.
 *
 * @example
 * var lzwModule = require('path-to-algorithms/src/compression'+
 * '/LZW/LZW');
 * var lzw = new lzwModule.LZW();
 *
 * var compressed = lzw.compress("ABCABCABCABCABCABC");
 * console.log(compressed);
 *
 * var decompressed = lzw.decompress(compressed);
 * console.log(decompressed);
 *
 * @module compression/LZW/LZW
 */
(function (exports) {
  'use strict';

  exports.LZW = function () {
    this.dictionarySize = 256;
  };

  exports.LZW.compress = function (data) {
    var i;
    var dictionary = {};
    var character;
    var wc;
    var w = '';
    var result = [];

    for (i = 0; i < this.dictionarySize; i = i + 1) {
      dictionary[String.fromCharCode(i)] = i;
    }

    for (i = 0; i < data.length; i = i + 1) {
      character = data.charAt(i);
      wc = w + character;
      if (dictionary.hasOwnProperty(wc)) {
        w = wc;
      } else {
        result.push(dictionary[w]);
        dictionary[wc] = this.dictionarySize;
        this.dictionarySize = this.dictionarySize + 1;
        w = String(character);
      }
    }

    if (w !== '') {
      result.push(dictionary[w]);
    }

    return result;
  };

  exports.LZW.decompress = function (compressedData) {
    var i;
    var dictionary = [];
    var w;
    var result;
    var key;
    var entry = '';

    for (i = 0; i < this.dictionarySize; i = i + 1) {
      dictionary[i] = String.fromCharCode(i);
    }

    w = String.fromCharCode(compressedData[0]);
    result = w;

    for (i = 1; i < compressedData.length; i = i + 1) {
      key = compressedData[i];
      if (dictionary[key]) {
        entry = dictionary[key];
      } else {
        if (key === this.dictionarySize) {
          entry = w + w.charAt(0);
        } else {
          return null;
        }
      }

      result += entry;
      dictionary[this.dictionarySize] = w + entry.charAt(0);
      this.dictionarySize = this.dictionarySize + 1;
      w = entry;
    }

    return result;
  };
})(typeof window === 'undefined' ? module.exports : window);
