// given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items

// EXAMPLE:
// array1: ['a', 'b', 'c', 'x'];
// array2: ['z', 'y', 'i'];
// returns => false
// array1: ['a', 'b', 'c', 'x'];
// array2: ['x', 'y', 'z'];
// returns => true

// brute force approach, using O(a * b)
function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(containsCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));

// improving time complexity, using O(a + b)
function containsCommonItem2(arr1, arr2) {
  // loop through arr1 and create an object where properties === items in array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }

  // loop through arr2 and check if item in arr2 exists on created object
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

console.log(containsCommonItem2(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(containsCommonItem2(["a", "b", "c", "x"], ["z", "y", "x"]));

// most readable
function containsCommonItem3(arr1, arr2) {
  return arr1.some((item) => arr2.includes(item));
}

console.log(containsCommonItem3(["a", "b", "c", "x"], ["z", "y", "i"]));
console.log(containsCommonItem3(["a", "b", "c", "x"], ["z", "y", "x"]));
