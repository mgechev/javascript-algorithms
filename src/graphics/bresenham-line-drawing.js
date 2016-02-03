(function (exports) {
  'use strict';

  /**
   * Draws (prints) the given coordinates
   * @param  {number} x The first coordinate of the point
   * @param  {number} y The second coordinate of the point
   */
  function drawPoint(x, y) {
    console.log(x, y);
  }

  /**
   * Bresenham's line drawing algorithm.
   * It has complexity O(n)
   * @param  {number} x1 The first coordinate of the beginning of the line
   * @param  {number} y1 The second coordinate of the beginning of the line
   * @param  {number} x2 The first coordinate of the end of the line
   * @param  {number} y2 The second coordinate of the end of the line
   * @param  {function} draw Optional custom drawing function.
   */
  function drawLine(x1, y1, x2, y2, draw) {
    var drawPointStrategy = draw || drawPoint;
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var cx = (x1 < x2) ? 1 : -1;
    var cy = (y1 < y2) ? 1 : -1;
    var error = dx - dy;
    var doubledError;

    while (x1 !== x2 || y1 !== y2) {
      drawPointStrategy(x1, y1);
      doubledError = error + error;
      if (doubledError > -dy) {
        error -= dy;
        x1 += cx;
      }
      if (doubledError < dx) {
        error += dx;
        y1 += cy;
      }
    }
  }

  exports.drawLine = drawLine;

}(typeof exports === 'undefined' ? window : exports));
