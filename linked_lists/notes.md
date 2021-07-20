## Data Structures - Linked Lists

Linked lists contain sets of nodes, which have 2 or 3 elements (singly = 2, doubly = 3). The first is the value of the data you want to store, the second is the pointer which points to the next node in line, and the third is the pointer which points to the previous node.

- Linked lists are null terminated.

Big-O Time Complexities

- prepend: O(1)
- append: O(1)
- lookup: O(n)
- insert: O(n)
- delete: O(n)

## Linked Lists Types

There are 2 types of linked lists:

1. singly linked:

- nodes: next
- traverse: forwards only

2. doubly linked:

- nodes: next, previous
- traverse: forwards and backwards

## Why Linked Lists VS Arrays OR Objects

1. loose structure: you can esaily insert a new value into the middle of the list by resetting a few pointers.

## What's a Pointer

A pointer is a reference to another place in memory or another object or another node.

## When to Use Singly VS Doubly

1. Singly

- when you require less memory to be used or need a fast solution

2. Doubly

- when you require traversing backwards

## Pros && Cons of Linked Lists

- Pros:

1. fast insertion
2. fast deletion
3. ordered
4. flexible size

- Cons:

1. slow lookup
2. more memory
