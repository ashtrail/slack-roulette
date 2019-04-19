const Slot = {
  EMPTY: 0,
  LOADED: 1
};

class Gun {
  constructor(bullets = 6) {
    this.bullets = bullets;
    this.state = [];
    for (let i = 0; i < this.bullets; i++) {
      this.state.push(Slot.EMPTY);
    }
  }

  load() {
    console.log(this.state);
    const slots = [];
    for (let i = 0; i < this.bullets; i++) {
      if (this.state[i] === Slot.EMPTY) slots.push(i);
    }
    console.log("slots", slots);
    if (slots === []) return false;
    var index = Math.floor(Math.random() * slots.length);
    var slot = slots[index];
    this.state[slot] = Slot.LOADED;
    return true;
  }

  shoot() {
    const bullet = this.state.shift();
    this.state.push(Slot.EMPTY);
    return bullet === Slot.LOADED;
  }

  count() {
    console.log(this.state);
    return this.state.reduce((total, slot) => total + slot);
  }
}

module.exports = Gun;
