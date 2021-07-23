// 4 * 4 === 16 bytes of storage
const strings = ["a", "b", "c", "d"];

// accessing the 3rd item in strings array
console.log(strings[2]);

// push
strings.push("e"); // O(1)
console.log(strings);

// pop
strings.pop(); // O(1)
console.log(strings);

// unshift
strings.unshift("x"); // O(n)
console.log(strings);

// splice
strings.splice(2, 0, "alien"); // O(n/2) => O(n)
console.log(strings);

// implementing an array
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push("hi");
newArr.push("you");
newArr.push("!");
console.log(newArr);

newArr.pop();
console.log(newArr);

newArr.delete(1);
console.log(newArr);

// reverse a string
// 'Hi My name is Courtney' => 'yentruoC si eman yM iH'

function reverseString(string) {
  if (!string || typeof string !== "string" || string.length < 2) {
    return string;
  }

  return string.split("").reverse().join("");
}

console.log(reverseString("Hi My name is Courtney"));

// merge sorted array
// [0, 3, 31] [4, 6, 30] => [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  const megeredArrays = [...array1, ...array2];

  return megeredArrays.sort((a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([], [4, 6, 30]));
console.log(mergeSortedArrays([0, 3, 4, 31], []));
