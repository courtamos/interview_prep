// Find 1st, Find Nth(last)...
const array = ["hi", "wut?", "cool"];

array[0]; // first => O(1)
array[array.length - 1]; // last => O(1)

// Find 1st, Find Nth, and the dates
const array2 = [
  { tweet: "hi", date: 2012 },
  { tweet: "wut?", date: 2013 },
  { tweet: "cool", date: 2013 },
];

// O(n^2)
