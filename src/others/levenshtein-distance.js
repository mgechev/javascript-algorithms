var levenshteinDistance = (function () {
  'use strict';

  function levenshteinDistance(s, ls, t, lt) {
    if (ls === 0) {
      return lt;
    }
    if (lt === 0) {
      return ls;
    }
    var cost;
    if (s[ls - 1] === t[lt - 1]) {
      cost = 0;
    } else {
      cost = 1;
    }
    return Math.min(levenshteinDistance(s, ls - 1, t,     lt) + 1,
                    levenshteinDistance(s, ls,     t, lt - 1) + 1,
                    levenshteinDistance(s, ls - 1, t, lt - 1) + cost);
  }

  return function (s, t) {
    return levenshteinDistance(s, s.length, t, t.length);
  };
}());

//console.log(levenshteinDistance('kitten', 'sitting'));