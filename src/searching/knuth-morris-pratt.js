const kmp = (() => {
  const builtKMPTable = (str) => {
    const res = [];
    let len;
    let front;
    let end;
    let found;
    for (let i = 1; i <= str.length; i += 1) {
      front = Math.max(1, i - ((res[i - 2] || 0) + 1));
      end = Math.min(i - 1, (res[i - 2] || 0) + 1);
      found = false;
      len = 0;
      while (end >= 1 && front <= i && !found) {
        if (str.substring(0, end) === str.substring(front, i)) {
          found = true;
          len = end;
        } else {
          end -= 1;
          front += 1;
        }
      }
      res[i - 1] = len;
    }
    return res;
  };

  /**
   * Knuth–Morris–Pratt algorithm. Searches for the position of
   * the first occurrence of a specified value in a string.
   *
   * @example
   *
   * const indexOf = require('path-to-algorithm/src/searching/' +
   * 'knuth-morris-pratt').kmp;
   * console.log(indexOf('hello', 'll')); // 2
   *
   * @public
   * @module searching/knuth-morris-pratt
   * @param {String} str String.
   * @param {String} substr Substring.
   * @return {Number} A Number, representing the position
   * where the specified substring occurs for the first
   * time, or -1 if it never occurs.
   */
  const indexOf = (str, substr) => {
    if (str === substr) {
      return 0;
    }
    const table = builtKMPTable(substr);
    let i = 0;
    let j = 0;
    while (i < str.length) {
      if (str[i] === substr[j]) {
        i += 1;
        j += 1;
      }
      if (j === substr.length) {
        return i - j;
      }
      if (i < str.length && str[i] !== substr[j]) {
        if (j > 0 && table[j - 1] !== 0) {
          j = table[j - 1];
        } else {
          i += 1;
          j = 0;
        }
      }
    }
    return -1;
  };

  return indexOf;
})();

export { kmp };
