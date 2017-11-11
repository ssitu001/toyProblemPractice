// Shortest Route
// Given an unweighted, undirected graph which represents a metro map as follows 
// vertices are stations
// edges are the path between two stations


// Given a start station and ending station, determine the minimum number of stops that must be made to get to the destination.

// Input: A Graph (unweighted/undirected), a starting Vertex, and an ending Vertex
// Output: Integer
// Example
// Input: The graph represented below, Vertex A, Vertex F

  
//     A ---- B
//   / |      |
// C   D      E 
// |       /
// F---G

// Output: 2 Stops (From A stop at C, and then stop at F)
// Constraints
// Time Complexity: O(V + E) where V is the number of Vertices and E is the number of Edges
// Auxiliary Space Complexity: O(V)

// A graph Vertex instance has the following properties:
// value : a string
// 	edges : a list which contains references to other vertices in the Graph
// The graph has a list of all the vertices: Graph.vertices
// The Vertex values are all unique


class Vertex{
  constructor(id){
    this.id = id !== undefined? id : null;
    this.edges = [];
  }
}

// generate graph from int and array of arrays
function deserialize(n, edges){
  let vertices = {};
  while (n > 0){
    vertices[n] = new Vertex(n);
    n--;
  }
  let v1;
  let v2;
  edges.forEach(edge => {
    v1 = edge[0];
    v2 = edge[1];
    vertices[v1].edges.push(vertices[v2]);
    vertices[v2].edges.push(vertices[v1]);
  });
  return vertices[1];
}

// sampleGraph is the vertex with id 1
const sampleGraph = deserialize(7, [[1, 2], [1, 3], [1 ,4], [2 ,5], [4, 7], [5, 7], [6, 3], [6, 7]]);

const BFSgraph = (vertex) => {
  let seen = new Set();
  let results = [];
  let queue = [vertex];
  let curr;
  let neighbors;

  while (queue.length) {
    curr = queue.shift();
    seen.add(curr.id);
    neighbors = curr.edges;
    
    for (let i = 0; i < neighbors.length; i++) {
      if (!seen.has(neighbors[i].id)) {
        seen.add(neighbors[i].id);
        queue.push(neighbors[i]);
      }
    }
    results.push(curr.id);
  }
  return results;
}

const shortestPath = (vertex, start, end) => {
  let seen = new Set();
  let distance = {
    1: Infinity,
    2: Infinity,
    3: Infinity,
    4: Infinity,
    5: Infinity,
    6: Infinity,
    7: Infinity,
  };
  let queue = [vertex];
  let curr;
  let neighbors;

  distance[start] = 0;

  while(queue.length) {
    curr = queue.shift();
    seen.add(curr.id);

    neighbors = curr.edges;

    for (let i = 0; i < neighbors.length; i++) {
      if (!seen.has(neighbors[i].id)) {
        seen.add(neighbors[i].id);
        distance[neighbors[i].id] = Math.min(distance[neighbors[i].id], distance[curr.id] + 1);
        queue.push(neighbors[i]);
      }
    }
  }
  return distance[end];
}

console.log(shortestPath(sampleGraph, 1, 6))