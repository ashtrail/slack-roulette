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
    const index = Math.floor(Math.random() * emptyChambers.length);
    const chamber = emptyChambers[index];
    this.cylinder[chamber] = Chamber.LOADED;
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

  revolve() {
    const bullet = this.cylinder.shift();
    this.cylinder.push(bullet);
  }

  spin() {
    const revolves = Math.floor(Math.random() * 6);
    for (let i = 0; i < revolves; i++) {
      this.revolve();
    }
  }
}

module.exports = Revolver;
