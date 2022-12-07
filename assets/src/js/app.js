const app = Vue.createApp({
  data() {
    return {
      player: {
        hp: 100,
        attack: 10,
      },
      monster: {
        hp: 100,
        attack: 7,
      },
    };
  },
  methods: {
    attackMonster() {
      // Attack the monster with basic attack.
      // Get random attack value and deduce it from monsters hp

      this.monster.hp -= randDamage(this.player.attack);
    },
  },
});

app.mount("#game");

// Define some methods
function randDamage(attack, factor = 0.2) {
  // Returns a number in range of +- factor value of the attack value.
  // For example attack of 5 with factor of 20%(0.2) will generate values
  // between 4 and 6
  const minAttack = (1 - factor) * attack;
  const maxAttack = (1 + factor) * attack;

  return Math.floor(Math.random() * (maxAttack - minAttack)) + minAttack;
}
