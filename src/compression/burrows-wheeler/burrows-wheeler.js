(function (exports) {
  'use strict';

  /**
   * Burrows Wheeler.
   *
   * This algorithm is commonly used as a step in the process of compressing data,
   * it rearranges a character string into runs of similar characters making algorithms
   * like move-to-front transform and run-length encoding reach higher compression
   * rates. This implementation only supports characters with ascii code greater than 0 as
   * 0 is used at the process of encode and decode.
   *
   * @example
   * const burrows = require('path-to-algorithms/src/burrows-wheeler/burrows-wheeler').burrowsWheeler;
   * const s = 'ananabanana';
   * const encoded_str = burrows.encode(s);
   * console.log(encoded_str);
   * const decoded_str = burrows.decode(encoded_str);
   * console.log(decoded_str);
   *
   * @module compression/burrows-wheeler/burrows-wheeler
   */
  exports.burrowsWheeler = function() {

  }

  /**
   * Consumes n^2 space.
   */
  exports.burrowsWheeler.encode = function(str) {
    str = String.fromCharCode(0) + str;
    var combinations = [];
    for (let i = 0; i < str.length; i++) {
      combinations.push(str.substring(i) + str.substring(0, i));
    }
    var sorted = combinations.sort();
    var result = [];
    for (let i = 0; i < sorted.length; i++) {
      result.push(combinations[i][str.length - 1]);
    }
    return result.join('');
  }

  exports.burrowsWheeler.decode = function(encoded_str) {
    const sorted_char_sequence = encoded_str.split('').sort().join('');
    const left_side = {};
    const right_side = {};
    var max_each_char_left = {};
    var max_each_char_right = {};

    for (let i = 0; i < encoded_str.length; i++) {
      var id_left = sorted_char_sequence[i];
      if (id_left in max_each_char_left) {
        max_each_char_left[id_left] = max_each_char_left[id_left] + 1;
      } else {
        max_each_char_left[id_left] = 1;
      }
      id_left += String(max_each_char_left[id_left]);

      var id_right = encoded_str[i];
      if (id_right in max_each_char_right) {
        max_each_char_right[id_right] = max_each_char_right[id_right] + 1;
      } else {
        max_each_char_right[id_right] = 1;
      }
      id_right += String(max_each_char_right[id_right]);

      left_side[id_left] = {char: sorted_char_sequence[i], right: id_right};
      right_side[id_right] = {char: encoded_str[i], left: id_right};
    }
    var result = "";
    var first_char = sorted_char_sequence[0];
    var search_char = first_char + '1';
    var end_char = search_char;
    while (right_side[left_side[search_char].right].left != end_char) {
      result     += left_side[search_char].char;
      search_char = right_side[left_side[search_char].right].left;
    }
    result += left_side[search_char].char;
    result = result.substring(1).split('').reverse().join('');
    return result;
  }

}(typeof exports === 'undefined' ? window : exports));
