const Gun = require('./gun');

class State {
  constructor() {
    this.state = {};
  }

  getGun(channel_id) {
    if (!this.state[channel_id]) {
      this.state[channel_id] = new Gun();
    }
    return this.state[channel_id];
  }
}

module.exports = State;