const app = Vue.createApp({
  data() {
    return {
      player: {
        maxHp: 100,
        hp: 100,
        attack: 7,
        magic: 20,
        spCount: 1,
      },
      monster: {
        hp: 100,
        attack: 10,
      },
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
      return this.player.spCount % 3 !== 0;
    },
  },
  methods: {
    attackMonster() {
      // Attack the monster with basic attack.
      // Get random attack value and subtract it from monsters hp
      this.monster.hp -= randDamage(this.player.attack);
      this.attackPlayer();

      // Increment the special counter
      this.player.spCount++;
    },
    spAttackMonster() {
      // Attack the monster with special attack. Special attack deals
      // double the damage, but can only be used once every 3rd turn.
      // Get random attack value and subtract it from monsters hp

      this.monster.hp -= randDamage(this.player.attack * 2);
      this.attackPlayer();
      this.player.spCount++;
    },
    healPlayer() {
      // Attack the monster with special attack. Special attack deals
      // double the damage, but can only be used once every 3rd turn.
      // Get random attack value and subtract it from monsters hp

      const newHealth = this.player.hp + randDamage(this.player.magic, 0);
      this.player.hp =
        newHealth > this.player.maxHp ? this.player.maxHp : newHealth;
      this.attackPlayer();
      this.player.spCount++;
    },
    attackPlayer() {
      // Attack the player with basic attack
      // Get random damage number and subtract it from players hp.

      this.player.hp -= randDamage(this.monster.attack);

      // Determine if the game is over
      if (this.monster.hp < 1) {
        if (this.player.hp < 1) {
          alert("It's a draw");
        } else {
          alert("Player Won");
        }
      } else if (this.player.hp < 1) {
        alert("Monster Won");
      }
    },
    watch: {
      "player.hp": (newValue, oldValue) => {
        if (newValue < 1) {
        }
      },
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
