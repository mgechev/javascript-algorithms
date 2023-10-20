function SuffixTreeNode() {
  this.transitions = {};
  this.suffixLink = null;
}

SuffixTreeNode.prototype.addTransition = function (
  targetNode,
  startIdx,
  endIdx,
  character
) {
  this.transitions[character] = [targetNode, startIdx, endIdx];
};

SuffixTreeNode.prototype.isLeaf = function () {
  return Object.keys(this.transitions).length === 0;
};

function SuffixTree() {
  this.text = "";
  this.stringList = [];
  this.separators = [];
  this.rootNode = new SuffixTreeNode();
  this.bottomNode = new SuffixTreeNode();
  this.rootNode.suffixLink = this.bottomNode;
  this.activeNode = this.rootNode;
  this.activeEdge = 0;
  this.activeLength = -1;
}

SuffixTree.prototype.addString = function (inputString) {
  var tempLength = this.text.length;
  this.text += inputString;
  this.separators.push(inputString[inputString.length - 1]);
  this.stringList.push(inputString);
  var activeNode, activeEdge, activeLength;
  activeNode = this.activeNode;
  activeEdge = this.activeEdge;
  activeLength = this.activeLength;

  for (var j = tempLength; j < this.text.length; j++) {
    this.bottomNode.addTransition(this.rootNode, j, j, this.text[j]);
  }

  while (this.text[activeLength + 1]) {
    activeLength++;
    var updateResult = this.updateActivePointers(
      activeNode,
      activeEdge,
      activeLength
    );
    updateResult = this.canonizeActivePointers(
      updateResult[0],
      updateResult[1],
      activeLength
    );
    activeNode = updateResult[0];
    activeEdge = updateResult[1];
  }

  this.activeNode = activeNode;
  this.activeEdge = activeEdge;
  this.activeLength = activeLength;
  return this;
};

SuffixTree.prototype.updateActivePointers = function (
  activeNode,
  activeEdge,
  activeLength
) {
  var oldRootNode = this.rootNode;
  var endAndNewRoot = this.testAndSplit(
    activeNode,
    activeEdge,
    activeLength - 1,
    this.text[activeLength]
  );
  var endPoint = endAndNewRoot[0];
  var newRootNode = endAndNewRoot[1];

  while (!endPoint) {
    newRootNode.addTransition(
      new SuffixTreeNode(),
      activeLength,
      Infinity,
      this.text[activeLength]
    );

    if (oldRootNode !== this.rootNode) {
      oldRootNode.suffixLink = newRootNode;
    }

    oldRootNode = newRootNode;
    var activePointers = this.canonizeActivePointers(
      activeNode.suffixLink,
      activeEdge,
      activeLength - 1
    );
    activeNode = activePointers[0];
    activeEdge = activePointers[1];
    endAndNewRoot = this.testAndSplit(
      activeNode,
      activeEdge,
      activeLength - 1,
      this.text[activeLength]
    );
    endPoint = endAndNewRoot[0];
    newRootNode = endAndNewRoot[1];
  }

  if (oldRootNode !== this.rootNode) {
    oldRootNode.suffixLink = activeNode;
  }

  return [activeNode, activeEdge];
};

SuffixTree.prototype.testAndSplit = function (
  activeNode,
  activeEdge,
  position,
  character
) {
  if (activeEdge <= position) {
    var transition = activeNode.transitions[this.text[activeEdge]];
    var nextNode = transition[0],
      k = transition[1],
      p = transition[2];
    if (character === this.text[k + position - activeEdge + 1]) {
      return [true, activeNode];
    } else {
      var splitNode = new SuffixTreeNode();
      activeNode.addTransition(
        splitNode,
        k,
        k + position - activeEdge,
        this.text[k]
      );
      splitNode.addTransition(
        nextNode,
        k + position - activeEdge + 1,
        p,
        this.text[k + position - activeEdge + 1]
      );
      return [false, splitNode];
    }
  } else {
    if (!activeNode.transitions[character]) {
      return [false, activeNode];
    } else {
      return [true, activeNode];
    }
  }
};

SuffixTree.prototype.canonizeActivePointers = function (
  activeNode,
  activeEdge,
  position
) {
  if (position < activeEdge) {
    return [activeNode, activeEdge];
  } else {
    var transition = activeNode.transitions[this.text[activeEdge]];
    var nextNode = transition[0],
      k = transition[1],
      p = transition[2];

    while (p - k <= position - activeEdge) {
      activeEdge = activeEdge + p - k + 1;
      activeNode = nextNode;

      if (activeEdge <= position) {
        transition = activeNode.transitions[this.text[activeEdge]];
        nextNode = transition[0];
        k = transition[1];
        p = transition[2];
      }
    }

    return [activeNode, activeEdge];
  }
};

SuffixTree.prototype.convertToJson = function () {
  var text = this.text;
  var result = {
    name: "",
    parent: null,
    suffix: "",
    children: [],
  };

  function traverse(node, separators, stringList, result) {
    for (var t in node.transitions) {
      var transition = node.transitions[t];
      var targetNode = transition[0],
        startIdx = transition[1],
        endIdx = transition[2];
      var name = text.substring(startIdx, endIdx + 1);
      var position = separators.length - 1;
      for (var pos = name.length - 1; pos > -1; pos--) {
        var separatorIndex = separators.indexOf(name[pos]);
        position = separatorIndex > -1 ? separatorIndex : position;
      }

      var nameParts = name.split(separators[position]);
      if (nameParts.length > 1) {
        name = nameParts[0] + separators[position];
      }
      var suffix = result["suffix"] + name;
      var childNode = {
        name: name,
        parent: result["name"],
        suffix: suffix,
        children: [],
      };
      if (targetNode.isLeaf()) {
        childNode["sequence"] = position + 1;
        childNode["start"] = "" + (stringList[position].length - suffix.length);
      }
      childNode = traverse(targetNode, separators, stringList, childNode);
      result["children"].push(childNode);
    }

    return result;
  }

  return traverse(this.rootNode, this.separators, this.stringList, result);
};

SuffixTree.prototype.toString = function () {
  var text = this.text;

  function traverse(node, offset, result) {
    offset = typeof offset !== "undefined" ? offset : "";
    result = typeof result !== "undefined" ? result : "";
    for (var t in node.transitions) {
      var transition = node.transitions[t];
      var targetNode = transition[0],
        startIdx = transition[1],
        endIdx = transition[2];
      result +=
        offset +
        '["' +
        text.substring(startIdx, endIdx + 1) +
        '", ' +
        startIdx +
        ", " +
        endIdx +
        "]" +
        "\r\n";
      result += traverse(targetNode, offset + "\t");
    }
    return result;
  }

  return traverse(this.rootNode);
};

SuffixTree.prototype.print = function () {
  console.log(this.toString());
};

// Test Cases
// const suffixTree = new SuffixTree();

// // Add strings to the tree
// suffixTree.addString("adeacdade");
// suffixTree.addString("abcabxabcd");
// suffixTree.addString("abcdefabxybcdmnabcdex");
// suffixTree.addString("abcadak");
// suffixTree.addString("dedododeodo");
// suffixTree.addString("abcabxabcd");
// suffixTree.addString("mississippi");
// suffixTree.addString("banana");
// suffixTree.addString("ooooooooo");

// // Convert the SuffixTree to JSON for visualization or other purposes
// const treeJson = suffixTree.convertToJson();
// console.log(JSON.stringify(treeJson, null, 2));

// // Print the structure of the SuffixTree for debugging
// suffixTree.print();
