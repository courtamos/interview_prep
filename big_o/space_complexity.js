// Space Complexity === O(1)
function boo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boo!");
  }
}

boo([1, 2, 3, 4, 5]);

// Space Complexity === O(n)
function arrayOfHiNTimes(n) {
  let hiArray = []; // new data structure
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi"; // adding new memory
  }

  return hiArray;
}

console.log(arrayOfHiNTimes(6));
