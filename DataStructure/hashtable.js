class HashTable {
  constructor(size){
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length //geting character of the letter
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {.   //if nothing is present in the location that add the arrray there
      this.data[address] = [];
    }
    this.data[address].push([key, value]);   //else it will create a branched array
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {                    //checking with the key value
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
}


 keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }

//Example
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 100)
myHashTable.get('grapes')
myHashTable.set('apples', 90)
myHashTable.get('apples')
myHashTable.set('banana', 800)
myHashTable.get('banana')
