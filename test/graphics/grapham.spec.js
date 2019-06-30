var convexHull = require('../../src/graphics/graham').convexHull;

const points = [
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: 1 },
  { x: 0.15, y: 0.15 },
  { x: 0.5, y: 0.5 }
];

describe('Graham\'s algorithm for convex hull', function() {
  'use strict';

  it('should not throw with empty list', () => {
    expect(() => convexHull([])).not.toThrow();
  });

  it('should calculate the convex hull', () => {
    expect(convexHull(points)).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0.5, y: 0.5 },
      { x: 0, y: 1 }
    ]);
  });
});
