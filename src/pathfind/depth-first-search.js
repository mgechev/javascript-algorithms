/* A graph is an abstract model of a network structure. A graph is a set of nodes (or vertices) connected by edges. Learning about graphs is important because any binary relationship can be represented by a graph. */

var Node = function(data){
    this.data = data;
    this.neighbors = [];
};
var Graph = function(){
    this.nodes = [];
    this.length = 0;
};
Graph.prototype.addNode = function(node){
    this.nodes.push(node);
    return ++this.length;
};
Graph.prototype.addEdge = function(nodeA, nodeB){ // arg: nodeID
    var nA = this.nodes.filter(function(node){
        return node.data.id === nodeA;
    });
    var nB = this.nodes.filter(function(node){
        return node.data.id === nodeB;
    });
    
    if(nA.length && nB.length){
        nA[0].neighbors.push(nB[0]);
        nB[0].neighbors.push(nA[0]);
    } // Set each other as neighbors
};


(function (exports) {
  'use strict';

  var depsearch = (function () {

    function depsearch(map, startNode, end, d) {
        var graph = makeGraph(map.data, map.width, map.height);
        var startNode = getNodeById(graph, startPos);
        var targetNode = getNodeById(graph, targetPos);
        var path = [];
        var curNode = startNode;
        
        var stack = new Stack();
        stack.push(startNode);
        
        while(true){
            curNode = stack.top();
            path.push(curNode.id);
            curNode.visited = true;
            
            if(curNode.id === targetNode.id){
                break;
            }
            
            var unvisited = 0;
            curNode.adj.forEach(function(id){
                var node = getNodeById(graph, id);
                if(!node.visited){
                    stack.push(node);
                    unvisited += 1;
                }
            });
            
            if(unvisited === 0){
                stack.pop();
            }
            
            
        }
        
    }

    /**
     * Depth first Searth to Pathfinding Algorithms
     * Algorithm is NOT stable.
     *
     * 1. Use a stack
     * 2. Search a single path to the end
     * 3. Backtrack to last node with multiple outgoing paths
     *
     * @example
     *
     * @public
     * @module sorting/3-way-string-depsearch
     * @param arr {Array} array which should be sorted.
     * @return {Array} Sorted array.
     */
    return {
        depFirstSearch: depsearch
    };
  }());

  exports.depsearch = depsearch;

})(typeof window === 'undefined' ? module.exports : window);

function getNodeById(map, pos){
    
}

function Stack() {

    var items = [];

    this.push = function(element){
        items.push(element);
    };

    this.pop = function(){
        return items.pop();
    };

    this.peek = function(){
        return items[items.length-1];
    };

    this.isEmpty = function(){
        return items.length == 0;
    };

    this.size = function(){
        return items.length;
    };

    this.clear = function(){
        items = [];
    };

    this.print = function(){
        console.log(items.toString());
    };

    this.toString = function(){
        return items.toString();
    };
}

Stack.prototype.push = function(item){
	this.length += 1;
	return this.items.push(item);
};

/* @return {*} */
Stack.prototype.pop = function(){
	if (this.length > 0) { 	this.length -= 1; }	
	return this.items.pop();
};

/* @return {*|undefined} */
Stack.prototype.top = function(){
	if (this.length > 0) { return this.items[this.length - 1];	}
	
	return undefined;
};


