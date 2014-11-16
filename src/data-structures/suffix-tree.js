// TODO
// 1) The algorithm is quite ineffective, better use
// Ukkomen's algorithm to build it in O(n) complexity.
// 2) Refactor the code in order to make addNode more readable.
// 3) Add methods `addLeaf`, `addNode` to the suffix tree node,
// it should be responsible for knowing it's internal representation.
// 4) etc...
function Node(value) {
  this.value = value;
  this.nodes = [];
  this.leaves = [];
}

function SuffixTree() {
  this.root = new Node('');
}

SuffixTree.prototype.addNode = (function () {

  function addNode(suffix, current) {
    var n, l;
    for (var i = 0; i < current.nodes.length; i += 1) {
      n = current.nodes[i];
      if (n.value === suffix[0]) {
        addNode(suffix.substr(1, suffix.length), n);
        return;
      }
    }
    for (i = 0; i < current.leaves.length; i += 1) {
      l = current.leaves[i];
      if (l[0] === suffix[0]) {
        var prefix = l[0];
        n = new Node(prefix);
        current.nodes.push(n);
        current.leaves.splice(current.leaves.indexOf(l), 1);
        l = l.substr(1, l.length);
        suffix = suffix.substr(1, suffix.length);
        addNode(l, n);
        addNode(suffix, n);
        return;
      }
    }
    current.leaves.push(suffix);
  }
  
  return function (suffix) {
    addNode(suffix, this.root);
  };
}());

SuffixTree.prototype.build = function (string) {
  for (var i = 0; i < string.length; i += 1) {
    this.addNode(string.substr(i, string.length));
  }
};

// var suffix = new SuffixTree();
// suffix.build('banana');
// console.log(suffix);