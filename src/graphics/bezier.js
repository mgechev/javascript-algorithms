(function (exports) {
  'use strict';

  function linearBezier(p0, p1, t) {
    return p0 + t * (p1 - p0);
  }

  function quadraticBezier(p0, p1, p2, t) {
    return linearBezier(linearBezier(p0, p1, t), linearBezier(p1, p2, t), t);
  }

  function cubicBezier(p0, p1, p2, p3, t) {
    return linearBezier(quadraticBezier(p0, p1, p2, t), quadraticBezier(p1, p2, p3, t), t);
  }

  exports.linearBezier = linearBezier;
  exports.quadraticBezier = quadraticBezier;
  exports.cubicBezier = cubicBezier;
})(typeof exports === 'undefined' ? window : exports);
