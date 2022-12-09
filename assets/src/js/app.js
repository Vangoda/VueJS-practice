const app = Vue.createApp({
  data() {
    return {
      player: {
        maxHp: 100,
        hp: 100,
        attack: 7,
        magic: 20,
      },
      monster: {
        maxHp: 100,
        hp: 100,
        attack: 10,
      },
      round: 1,
      winner: null,
    };
  },
  computed: {
    monsterBarStyle() {
      return `${this.monster.hp}%`;
    },
    playerBarStyle() {
      return `${this.player.hp}%`;
    },
    playerSPDisabled() {
      return this.round % 3 !== 0;
    },
  },
  methods: {
    resetGame() {
      // Reset all the data to default values
      this.player.hp = this.player.maxHp;
      this.monster.hp = this.monster.maxHp;
      this.round = 1;
      this.winner = null;
    },
    surrender() {
      // Let the monster win
      this.winner = "monster";
    },
    attackMonster() {
      // Attack the monster with basic attack.
      // Get random attack value and subtract it from monsters hp
      this.monster.hp -= randDamage(this.player.attack);
      this.attackPlayer();
    },
    spAttackMonster() {
      // Attack the monster with special attack. Special attack deals
      // double the damage, but can only be used once every 3rd turn.
      // Get random attack value and subtract it from monsters hp

      this.monster.hp -= randDamage(this.player.attack * 2);
      this.attackPlayer();
    },
    healPlayer() {
      // Attack the monster with special attack. Special attack deals
      // double the damage, but can only be used once every 3rd turn.
      // Get random attack value and subtract it from monsters hp

      const newHealth = this.player.hp + randDamage(this.player.magic, 0);
      this.player.hp =
        newHealth > this.player.maxHp ? this.player.maxHp : newHealth;
      this.attackPlayer();
    },
    attackPlayer() {
      // Attack the player with basic attack
      // Get random damage number and subtract it from players hp.

      this.player.hp -= randDamage(this.monster.attack);

      // Increment the special counter as this is the end of the round
      this.round++;
    },
  },
  watch: {
    round() {
      // Determine if the game is over and who won
      if (this.monster.hp < 1) {
        // Set monster hp to 0 to avoid negative values
        this.monster.hp = 0;
        if (this.player.hp < 1) {
          this.player.hp = 0;
          this.winner = "draw";
        } else {
          this.winner = "player";
        }
      } else if (this.player.hp < 1) {
        this.player.hp = 0;
        this.winner = "monster";
      }
    },
  },
});

app.mount("#game");

// Define some methods
function randDamage(attack, factor = 0.2) {
  // Returns a number in range of +- factor value of the attack value.
  // For example attack of 5 with factor of 20%(0.2) will generate values
  // between 4 and 6
  const minAttack = Math.floor((1 - factor) * attack);
  const maxAttack = Math.floor((1 + factor) * attack);

  return Math.floor(Math.random() * (maxAttack - minAttack)) + minAttack;
}
