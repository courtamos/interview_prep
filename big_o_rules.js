// BIG O RULE BOOK
// 1 => Worst Case
// we dont always know what the input with be (aka the size of it) so we can just assume that the worse case scenario is that the item we're looking for is last
// so, we use O(n)

// 2 => Remove Constants
// O(1 + n/2 + 100 ) => O(n + 1) => O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]); // O(1)

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
// 4 => Drop Non Dominants
