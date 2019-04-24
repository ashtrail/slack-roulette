const Chamber = {
  EMPTY: 0,
  LOADED: 1
};

class Revolver {
  constructor(chambers = 6) {
    this.chambers = chambers;
    this.cylinder = [];
    for (let i = 0; i < this.chambers; i++) {
      this.cylinder.push(Chamber.EMPTY);
    }
  }

  load() {
    const emptyChambers = [];
    for (let i = 0; i < this.chambers; i++) {
      if (this.cylinder[i] === Chamber.EMPTY) emptyChambers.push(i);
    }
    if (emptyChambers.length === 0) return false;
    var index = Math.floor(Math.random() * emptyChambers.length);
    var slot = emptyChambers[index];
    this.cylinder[slot] = Chamber.LOADED;
    return true;
  }

  shoot() {
    const bullet = this.cylinder.shift();
    this.cylinder.push(Chamber.EMPTY);
    return bullet === Chamber.LOADED;
  }

  count() {
    return this.cylinder.reduce((total, slot) => total + slot);
  }

  empty() {
    this.cylinder.fill(Chamber.EMPTY);
  }
}

module.exports = Revolver;
