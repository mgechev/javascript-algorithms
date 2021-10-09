var bezier = require('../../src/graphics/bezier');
var linearBezier = bezier.linearBezier;
var quadraticBezier = bezier.quadraticBezier;
var cubicBezier = bezier.cubicBezier;

// see https://www.geogebra.org/m/ek7RHvuc for graphical representation of test values

describe('linearBezier', function () {
  'use strict';

  it('should return 0.5 for p0=0 p1=1 t=0.5', function () {
    expect(linearBezier(0, 1, 0.5)).toEqual(0.5);
  });

  it('should return -2.8 for p0=-4.67 p1=-0.7 t=0.47', function () {
    expect(linearBezier(-4.67, -0.7, 0.47)).toBeCloseTo(-2.8, 1);
  });

  it('should return 2.67 for p0=-0.6 p1=6.33 t=0.47', function () {
    expect(linearBezier(-0.6, 6.33, 0.47)).toBeCloseTo(2.67, 1);
  });
});

describe('quadraticBezier', function () {
  'use strict';

  it('should return 1 for p0=0 p1=1 p2=2 t=0.5', function () {
    expect(quadraticBezier(0, 1, 2, 0.5)).toEqual(1);
  });

  it('should return 7.15 for p0=2.33 p1=8.23 p2=10.77 t=0.47', function () {
    expect(quadraticBezier(2.33, 8.23, 10.77, 0.47)).toBeCloseTo(7.15, 1);
  });

  it('should return 6.84 for p0=4.67 p1=8.93 p2=4.9 t=0.47', function () {
    expect(quadraticBezier(4.67, 8.93, 4.9, 0.47)).toBeCloseTo(6.84, 1);
  });
});

describe('cubicBezier', function () {
  'use strict';

  it('should return 1.5 for p0=0 p1=1 p2=2 p3=3 t=0.5', function () {
    expect(cubicBezier(0, 1, 2, 3, 0.5)).toEqual(1.5);
  });

  it('should return 9.78 for p0=2.4 p1=1.33 p2=19.87 p3=18.13 t=0.47', function () {
    expect(cubicBezier(2.4, 1.33, 19.87, 18.13, 0.47)).toBeCloseTo(9.78, 1);
  });

  it('should return -4.87 for p0=-7.03 p1=-1.4 p2=-10.63 p3=4.5 t=0.47', function () {
    expect(cubicBezier(-7.03, -1.4, -10.63, 4.5, 0.47)).toBeCloseTo(-4.87, 1);
  });
});
