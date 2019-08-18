var mod = require('../../src/data-structures/linked-list.js');
var Node = mod.Node;
var LinkedList = mod.LinkedList;

describe('Node', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof Node).toBe('function');
  });
  it('should construct properly', function () {
    var node = new Node('data');
    expect(node.data).toBe('data');
    expect(node.next).toBe(null);
    expect(node.prev).toBe(null);
  });
});

describe('Linked List', function () {
  'use strict';

  it('should be a constructor function', function () {
    expect(typeof LinkedList).toBe('function');
  });
  it('should push properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    expect(linkedList.first.data).toBe(1);
    expect(linkedList.first.next.data).toBe(2);
    expect(linkedList.first.next.next.data).toBe(3);
    expect(linkedList.first.next.next.next.data).toBe(4);
    expect(linkedList.first.next.next.next.next.data).toBe(5);
    expect(linkedList.last.data).toBe(5);
  });
  it('should pop properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    expect(linkedList.pop().data).toBe(5);
    expect(linkedList.pop().data).toBe(4);
    expect(linkedList.pop().data).toBe(3);
    expect(linkedList.pop().data).toBe(2);
    expect(linkedList.pop().data).toBe(1);
  });
  it('should shift properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    expect(linkedList.shift().data).toBe(1);
    expect(linkedList.shift().data).toBe(2);
    expect(linkedList.shift().data).toBe(3);
    expect(linkedList.shift().data).toBe(4);
    expect(linkedList.shift().data).toBe(5);
  });
  it('should reverse properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.reverse();
    expect(linkedList.shift().data).toBe(5);
    expect(linkedList.shift().data).toBe(4);
    expect(linkedList.shift().data).toBe(3);
    expect(linkedList.shift().data).toBe(2);
    expect(linkedList.shift().data).toBe(1);
  });
  it('should recursive reverse properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.recursiveReverse();
    expect(linkedList.shift().data).toBe(5);
    expect(linkedList.shift().data).toBe(4);
    expect(linkedList.shift().data).toBe(3);
    expect(linkedList.shift().data).toBe(2);
    expect(linkedList.shift().data).toBe(1);
  });
  it('should unshift properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.unshift(3);
    expect(linkedList.shift().data).toBe(3);
    expect(linkedList.shift().data).toBe(1);
    expect(linkedList.shift().data).toBe(2);
    expect(linkedList.shift().data).toBe(3);
    expect(linkedList.shift().data).toBe(4);
    expect(linkedList.shift().data).toBe(5);
  });
  it('should properly check for existing cycle', function () {
    var linkedList = new LinkedList();
    var last = new Node(2);
    var first = new Node(1);
    last.next = first;
    last.prev = first;
    first.next = last;
    first.prev = last;
    linkedList.first = first;
    linkedList.last = last;
    expect(linkedList.hasCycle()).toBe(true);
  });
  it('should properly check for non existing cycle', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    expect(linkedList.hasCycle()).toBe(false);
  });
  it('should inorder properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    var pushedValue = 1;
    function callback(node){
      expect(node.data).toBe(pushedValue);
      pushedValue += 1;
    }
    linkedList.inorder(callback);
  });
  it('should delete data properly', function () {
    var linkedList = new LinkedList();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.push(3);
    linkedList.push(4);
    linkedList.push(5);
    linkedList.remove(3);
    expect(linkedList.first.data).toBe(1);
    expect(linkedList.first.next.data).toBe(2);
    expect(linkedList.first.next.next.data).toBe(4);
    expect(linkedList.first.next.next.next.data).toBe(5);
    expect(linkedList.last.data).toBe(5);
  });
  it('should delete complex data properly', function () {
    var linkedList = new LinkedList();
    var item1 = {id: 1};
    var item2 = {id: 2};
    var item3 = {id: 3};
    var item4 = {id: 4};
    var item5 = {id: 5};
    linkedList.push(item1);
    linkedList.push(item2);
    linkedList.push(item3);
    linkedList.push(item4);
    linkedList.push(item5);
    var equals = function(a, b) { return a.id === b.id };
    linkedList.remove({id: 3}, equals);
    expect(linkedList.first.data).toBe(item1);
    expect(linkedList.first.next.data).toBe(item2);
    expect(linkedList.first.next.next.data).toBe(item4);
    expect(linkedList.first.next.next.next.data).toBe(item5);
    expect(linkedList.last.data).toBe(item5);
  });
});
