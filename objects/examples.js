const user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function () {
    console.log("aaaah!");
  },
};

console.log(user.age); // O(1)
console.log((user.spell = "abra kadabra")); // O(1)
console.log(user);
console.log(user.scream()); // O(1)
