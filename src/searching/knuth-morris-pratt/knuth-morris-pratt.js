var kmp = (function () {
  'use strict';
  function builtKMPTable(str) {
    var res = [],
        len, front, end, found;
    for (var i = 1; i <= str.length; i += 1) {
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
  }

  function indexOf(str, substr) {
    var table = builtKMPTable(substr),
        i = 0, j = 0;
    while (i < str.length) {
      if (str[i] === substr[j]) {
        i += 1;
        j += 1;
      }
      if (j === substr.length) {
        return i - j;
      }
      if (i < str.length && str[i] !== substr[j]) {
        if (table[j - 1] !== 0) {
          j = table[j - 1];
        } else {
          i += 1;
        }
      }
    }
    return -1;
  }
  return indexOf;
}());