// run time - varies computer to computer, some will be faster and others slower

const nemo = ["nemo"];
const everyone = [
  "dory",
  "bruce",
  "marlin",
  "nemo",
  "gill",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank",
];
const large = new Array(100).fill("nemo");

// O(n) => Linear Time
function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found NEMO!");
    }
  }
}
findNemo(nemo);
// findNemo(everyone);
// findNemo(large);

// 0(1) => Constant Time
function findFirstFish(array) {
  console.log(array[0]);
}
findFirstFish(everyone);

// 0(2) => rounds to O(1), doesn't matter about numer of elements, bu the scalability (0(1) is the best)
function findTwoFish(array) {
  console.log(array[0]);
  console.log(array[1]);
}
findTwoFish(everyone);
