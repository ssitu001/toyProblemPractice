class Trie {
  constructor() {
    this.rootNode = {};
  }

  checkPresentAndAdd(word) {

    let currentNode = this.rootNode;
    let isNewWord = false;

    // Work downwards through the trie, adding nodes
    // as needed, and keeping track of whether we add
    // any nodes.
    for (let i = 0; i < word.length; i++) {
      let char = word[i];

      if (!currentNode[char]) {
        isNewWord = true;
        currentNode[char] = {};
      }

      currentNode = currentNode[char];
    }

    //mark the end of a word.
    if (!currentNode["End"]) {
      isNewWord = true;
      currentNode["End"] = {};
    }

    return isNewWord;
  }
}


let prefixtrie = new Trie();
console.log(prefixtrie.checkPresentAndAdd("www.google.com"));
console.log(prefixtrie.checkPresentAndAdd("www.google.com"));
console.log(prefixtrie.checkPresentAndAdd("www.google.com"));

console.log(prefixtrie);