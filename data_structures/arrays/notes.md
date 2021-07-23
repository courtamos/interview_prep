## Data Structures - Arrays

Big-O Time Complexities

- lookup: O(n)
- push: O(1) // append: O(1) => can be O(n)
- insert: O(n)
- delete: O(n)

## Array Methods

1. Push

- add item(s) to the end of an array
- time complexity === O(1)

2. Pop

- remove the last item of an array
- time complexity === O(1)

3. Unshift

- add item(s) to the start of an array
- time complexity === O(n)

4. Splice

- add and/or remove items from any given position of an array
- time complexity === O(n)

## Types of Arrays

1. Static Arrays

- fixed in size
- must know the number of items before hand

2. Dynamic Arrays

- allow you to copy and rebuild an array at a new location
- can include/add new memory

## When/Why to Use Arrays

1. Fast Lookups
2. Fast Push/Pop => inserting or deleting from the beginning or end
3. Ordered

## When/Why to NOT Use Arrays

1. Slow Inserts => if you insert anywhere but the beginning or end
2. Slow Deletes => if you delete anywhere but the beginning or end
3. Fixed Size (aka static arrays)
