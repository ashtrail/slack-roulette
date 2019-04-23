const Slot = {
  EMPTY: 0,
  LOADED: 1
};

class Gun {
  constructor(barrelSize = 6) {
    this.barrelSize = barrelSize;
    this.barrel = [];
    for (let i = 0; i < this.barrelSize; i++) {
      this.barrel.push(Slot.EMPTY);
    }
  }

  load() {
    console.log(this.barrel);
    const slots = [];
    for (let i = 0; i < this.barrelSize; i++) {
      if (this.barrel[i] === Slot.EMPTY) slots.push(i);
    }
    console.log('slots', slots);
    if (slots.length === 0) return false;
    var index = Math.floor(Math.random() * slots.length);
    var slot = slots[index];
    this.barrel[slot] = Slot.LOADED;
    return true;
  }

  shoot() {
    const bullet = this.barrel.shift();
    this.barrel.push(Slot.EMPTY);
    return bullet === Slot.LOADED;
  }

  count() {
    console.log(this.barrel);
    return this.barrel.reduce((total, slot) => total + slot);
  }

  empty() {
    this.barrel.fill(Slot.EMPTY);
  }
}

module.exports = Gun;
