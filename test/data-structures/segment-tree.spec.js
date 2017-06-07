var SegmentTree = require('../../src/data-structures/segment-tree.js')
  .SegmentTree;

var defaultAggregate = function (a, b) {
  'use strict';
  return Math.min(a, b);
};

describe('Segment Tree', function () {
  'use strict';

  describe('indexing', function () {

    it('should be a constructor function', function () {
      expect(typeof SegmentTree).toBe('function');
    });

    it('should start with null original array', function () {
      expect(new SegmentTree()._original).toBe(null);
    });

    it('should start with empty array as data', function () {
      expect(new SegmentTree()._data).not.toBe(null);
      expect(new SegmentTree()._data.length).toBe(0);
    });

    it('should work with empty arrays', function () {
      var tree = SegmentTree.indexArray([], Infinity, defaultAggregate);
      expect(tree._data).toBeTruthy();
      expect(tree._data.length).toBe(0);
    });

    it('should index arrays with one element', function () {
      var tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(tree._data).toBeTruthy();
      expect(tree._data.length).toBe(1);
    });

    it('should index any array', function () {
      var tree = SegmentTree.indexArray([1, 2, 3], Infinity, defaultAggregate);
      expect(tree._data).toEqual([1, 1, 3, 1, 2]);

      tree = SegmentTree.indexArray([1, 2, 3, 6], Infinity, defaultAggregate);
      expect(tree._data).toEqual([1, 1, 3, 1, 2, 3, 6]);
    });

  });

  describe('should find the proper value at given interval', function () {

    it('should properly find the minimum when in range', function () {
      var tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(tree.query(0, 0)).toBe(1);

      tree = SegmentTree.indexArray([1, 2], Infinity, defaultAggregate);
      expect(tree.query(0, 0)).toBe(1);
      expect(tree.query(0, 1)).toBe(1);
      expect(tree.query(1, 1)).toBe(2);

      tree = SegmentTree.indexArray([1, -1, 2], Infinity, defaultAggregate);
      expect(tree.query(0, 2)).toBe(-1);
      expect(tree.query(0, 1)).toBe(-1);
      expect(tree.query(1, 1)).toBe(-1);
      expect(tree.query(1, 2)).toBe(-1);
      expect(tree.query(2, 2)).toBe(2);
    });

    it('should properly find the minimum when outside range', function () {
      var tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(tree.query(0, 2)).toBe(1);

      tree = SegmentTree.indexArray([1, 2, 3], Infinity, defaultAggregate);
      expect(tree.query(0, 20)).toBe(1);
      expect(tree.query(2, 20)).toBe(3);
      expect(Number.isFinite(tree.query(20, 25))).toBe(false);
    });

    it('should throw when the start index is bigger than end', function () {
      var tree = SegmentTree.indexArray([1], Infinity, defaultAggregate);
      expect(function () {
        tree.query(2, 1);
      }).toThrow();
      expect(function () {
        tree.query(1, 1);
      }).not.toThrow();
    });
  });
});

