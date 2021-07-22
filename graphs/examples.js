//     2 - 0
//   /  \
//  1 - 3

// edge list - explains the ocnnections below
const edgeList = [
  [0, 2],
  [2, 3],
  [2, 1],
  [1, 3],
];

// adjacent list - the index is the node and the value/s are the nodes neighbours
const adjacentList = [[2], [2, 3], [0, 1, 3], [1, 2]];

// adjacent matrix - use 0 and 1 to indicate is the node x has a connection node y (0 = NO, 1 = YES)
const adjacentMatrix = [
  [0, 0, 1, 0], // 0 is connected to 2
  [0, 0, 1, 1], // 1 is connected to 2 && 3
  [1, 1, 0, 1], // 2 is connected to 0 && 1 && 3
  [0, 1, 1, 0], // 3 is connected to 1 && 2
];
