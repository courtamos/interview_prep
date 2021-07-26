// recursive anatomy
let counter = 0;
function inception() {
  if (counter > 3) {
    // base case: stop when counter > 4
    return "done!";
  }
  counter++;
  return inception(); // recursive case: call while counter <= 3
}
