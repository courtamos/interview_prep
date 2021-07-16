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

// implement a hash table exercise
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set("grapes", 10000));
console.log(myHashTable.get("grapes"));
