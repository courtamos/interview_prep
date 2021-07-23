// BIG O RULE BOOK EXAMPLES

// 2 => Remove Constants
// O(1 + n/2 + 100 ) => O(n + 1) => O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// 3 => Different Terms for Inputs
// O(2n) => O(n)
function compressBoxesTwice(boxes) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(n + n)
function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(function (boxes) {
    console.log(boxes);
  });

  boxes2.forEach(function (boxes) {
    console.log(boxes);
  });
}

// O(n * n) => O(n^2) === Quadradic Time
const boxes = [1, 2, 3, 4, 5];
function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}
logAllPairs(boxes);

// 4 => Drop Non Dominants
// O(n + n^2) => O(n^2)
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers: ");
  numbers.forEach(function (number) {
    console.log(number);
  });

  console.log("and these are their sums: ");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}
