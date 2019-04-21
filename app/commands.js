const Gun = require('./gun');

const gun = new Gun();

module.exports = {
  load(_username) {
    return gun.load() ? 'well locked and loaded' : ':warning: already full';
  },

  shoot(username) {
    let answer = '';
    if (gun.count() === 0) answer += ':warning: _the gun is empty_\n';
    if (gun.shoot()) {
      answer += `:boom: BANG :boom:\n${username} is ded\n  :skull: :exploding_head: :skull:`;
    } else {
      answer += ':sweat_smile: - click - :sweat_smile:\n';
    }
    return answer;
  },

  count(_username) {
    return `there are ${gun.count()} on ${gun.barrelSize} shots loaded`;
  },

  empty(_username) {
    gun.empty();
    return 'the barrell has been emptied';
  },

  help(_username) {
    return `
  commands:
    - load : randomly loads one bullet in the barrel
    - shoot : shoots the first slot in the barrel
    - count : counts the bullets in the barrel
    - empty : empties the barrel
    - help : shows the commands
  `;
  }
};
