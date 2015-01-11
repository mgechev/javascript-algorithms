(function (exports) {
  'use strict';

  function Node(val) {
    this.value = val;
    this.nodes = {};
  }

  function SuffixTree() {
    this.root = new Node();
  }

  SuffixTree.prototype.addNode = (function () {

    function maxPrefix(a, b) {
      var res = [];
      for (var i = 0; i < Math.min(a.length, b.length); i += 1) {
        if (a[i] === b[i]) {
          res.push(a[i]);
        } else {
          return '';
        }
      }
      return res.join('');
    }

    function addNode(suffix, current) {
      // Empty string already exists in the suffix tree
      if (!suffix) {
        return;
      }
      // The suffix is already inside the tree
      if (current.value === suffix) {
        return;
      }
      // Insert recursively
      if (current.nodes[suffix[0]]) {
        return addNode(suffix.substr(1, suffix.length),
        current.nodes[suffix[0]]);
      }
      // Find the maximum prefix and split the current node if prefix exists
      var prefix = maxPrefix(current.value, suffix);
      if (prefix.length) {
        var temp = current.value;
        var suffixSuffix = suffix.substr(prefix.length, suffix.length);
        var currentSuffix = temp.substr(prefix.length, temp.length);
        current.value = prefix;
        addNode(currentSuffix, current);
        addNode(suffixSuffix, current);
      // If prefix doesn't exists add new child node
      } else {
        current.nodes[suffix[0]] = new Node(suffix);
      }
    }

    return function (suffix) {
      addNode(suffix, this.root);
    };
  }());

  // O(n^2) or even O(n^3) because of maxPrefix
  SuffixTree.prototype.build = function (string) {
    this.root.value = string;
    for (var i = 1; i < string.length; i += 1) {
      this.addNode(string.substr(i, string.length));
    }
  };

//  function isSubstr(tree, str) {
//    if (!tree) {
//      return false;
//    }
//    if (tree.nodes[str[0]]) {
//      return isSubstr(tree, str.substr(1, str.length));
//    }
//    var match = '';
//    for (var i = 0; i < Math.min(tree.value.length, str.length); i += 1) {
//      if (tree.value[i] === str[i]) {
//        match += str[i];
//      } else {
//        break;
//      }
//    }
//    if (match.length === str.length) {
//      return true;
//    }
//    return false;
//  }

  // var suffix = new SuffixTree();
  // suffix.build('banana');
  // console.log(suffix);

  exports.Node = Node;
  exports.SuffixTree = SuffixTree;

}(typeof exports === 'undefined' ? window : exports));
