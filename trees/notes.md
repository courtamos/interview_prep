## Data Structures - Trees

Trees have a hierarchical structure, meaning they can have zero or more child nodes. Typically tress have one root node, which then has child nodes branching off of it. The last nodes on a tree are called the leaf nodes.

## Binary Tree

- each node can only have zero, one, ot two child nodes
- each child node can only have one parent node

### Binary Search Tree

###### Big O Time Complexities

- lookup: O(log N)
- insert: O(log N)
- delete: O(log N)

###### Rules

1. all child nodes in the tree to the right of the root node, must be greater than the current node
2. a node can only have a maximum of 2 children nodes
