const Revolver = require('./revolver');

class State {
  constructor() {
    this.state = {};
  }

  getGun(channel_id) {
    if (!this.state[channel_id]) {
      this.state[channel_id] = new Revolver();
    }
    return this.state[channel_id];
  }
}

module.exports = State;