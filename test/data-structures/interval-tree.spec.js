var mod = require('../../src/data-structures/interval-tree.js');
var IntervalTree = mod.IntervalTree;

describe('IntervalTree', function () {
  'use strict';

  it('should correctly detect intersections', function () {
    var it = new IntervalTree();

    it.add([10383734, 10594186])
    it.add([10383734, 10594186])
    it.add([8891125, 9095610])
    it.add([9495571, 9677853])
    it.add([10093457, 10257167])
    it.add([9303743, 9404967])
    it.intersects([9303743, 9303744])
    expect(it.intersects([9303743, 9303744])).toBe(true)
    expect(it.intersects([10383734, 10383734])).toBe(true);

    it.add([9495571, 9677853])
    it.add([9303743, 9404967])

    expect(it.intersects([9303743, 9303744])).toBe(true)
    expect(it.intersects([9303742, 9303742])).toBe(false)

    expect(it.intersects([9404967,9404967])).toBe(true)
    expect(it.intersects([9404968,9404969])).toBe(false)

    it = new IntervalTree();

    expect(it.intersects([1,2])).toBe(false);

    it.add([1,2]);
    expect(it.contains(0.4)).toBe(false);
    expect(it.contains(1.4)).toBe(true);

    expect(it.intersects([0,3])).toBe(true);
    expect(it.intersects([1.5,1.6])).toBe(true);
    expect(it.intersects([2.1,3.0])).toBe(false);

    it.add([1.4,2.1]);

    expect(it.intersects([0,3])).toBe(true);
    expect(it.intersects([1.5,1.6])).toBe(true);

    expect(it.intersects([2.1,3.0])).toBe(true);
  });
});
