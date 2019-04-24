module.exports = {
  load(revolver, _username) {
    return revolver.load() ? 'well locked and loaded' : ':warning: already full';
  },

  shoot(revolver, username) {
    let answer = '';
    if (revolver.count() === 0) answer += ':warning: _the revolver is empty_\n';
    if (revolver.shoot()) {
      answer += `:boom: BANG :boom:\n${username} is ded\n  :skull: :exploding_head: :skull:`;
    } else {
      answer += ':sweat_smile: - click - :sweat_smile:\n';
    }
    return answer;
  },

  count(revolver, _username) {
    return `there are ${revolver.count()} on ${revolver.chambers} chambers loaded`;
  },

  empty(revolver, _username) {
    revolver.empty();
    return 'the chambers have been emptied';
  },

  spin(revolver, _username) {
    revolver.spin();
    return "spinnin'"
  },

  help(_revolver, _username) {
    return `
  commands:
    - load : randomly loads one bullet in the cylinder
    - shoot : fires the current chamber
    - count : counts the bullets in the cylinder
    - empty : empties the cylinder
    - spin: spins the cylinder
    - help : shows the commands
  `;
  }
};
