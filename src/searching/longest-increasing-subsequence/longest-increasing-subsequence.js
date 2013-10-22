exports.longestSubsequence = (function () {

  function max(array, cmp) {
    if (!array || !array.length) return -1;
    if (!cmp) {
      cmp = function (a, b) { return a - b };
    }
    var max = 0;
    for (var i = 1; i < array.length; i += 1)
      if (cmp(array[max], array[i]) < 0) max = i;
    return max;
  }

  function cmp(a, b) {
    return a.distance - b.distance;
  }

  function buildDag(array) {
    var result = [];
    for (var i = 0; i < array.length; i += 1) {
      result[i] = [];
      for (var j = i + 1; j < array.length; j += 1) {
        if (array[i] < array[j]) result[i].push(j); 
      }
    }
    return result;
  }

  function find(dag, node) {
    node = node || 0;
    var neighbours = dag[node],
        neighboursDistance = [],
        maxDist, maxNode, distance;

    if (!neighbours.length) return { distance: 1, neighbour: undefined, node: node };

    for (var i = 0; i < neighbours.length; i += 1)
      neighboursDistance[i] = find(dag, neighbours[i]);

    maxDist = max(neighboursDistance, cmp);
    maxNode = neighbours[maxDist];
    distance = 1 + neighboursDistance[maxDist].distance;
    return { distance: distance, neighbour: neighboursDistance[maxDist], node: node };
  }

  return function (array) {
    var results = [],
        dag = buildDag(array),
        maxPath;
    for (var i = 0; i < array.length; i += 1) {
      results.push(find(dag, i));
    }
    maxPath = results[max(results, cmp)];
    results = [];
    while (maxPath) {
      results.push(array[maxPath.node]);
      maxPath = maxPath.neighbour;
    }
    return results;
  };
})();