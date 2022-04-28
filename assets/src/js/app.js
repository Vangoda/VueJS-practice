let currentRound = 1;

const app = Vue.createApp({
  data() {
    return {
      monsterHP: 100,
      playerHP: 100,
      currentRound: 1,
    };
  },
  computed: {
    monsterBarStyles() {
      return {
        width: this.monsterHP + "%",
      };
    },
    playerBarStyles() {
      return {
        width: this.playerHP + "%",
      };
    },
    specialAttackDisabled() {
      // Return true if not divisible by 3.

      return this.currentRound % 3 !== 0;
    },
  },
  methods: {
    attackMonster(baseAttack = 5, attackRange = 12) {
      // Decrease monsters health by semi random amount

      // Increment the round counter
      this.currentRound++;

      // Random attack the monster
      this.monsterHP -= randomAttack(baseAttack, attackRange);
      // Keep the HP from going below zero
      this.monsterHP = this.monsterHP < 0 ? 0 : this.monsterHP;

      // Return the attack
      this.attackPlayer();
    },
    attackPlayer() {
      // Decrease players health by random amount
      const baseAttack = 15;
      const attackRange = 5;

      // Random attack the player
      this.playerHP -= randomAttack(baseAttack, attackRange);
      // Keep the HP from going below zero
      this.playerHP = this.playerHP < 0 ? 0 : this.playerHP;
    },
    specialAttackMonster() {
      // Deal a special attack with more damage,
      // only available every 3rd turn.
      const baseAttack = 20;
      const attackRange = 10;

      this.attackMonster(baseAttack, attackRange);
    },
  },
});

app.mount("#game");

function randomAttack(baseAttack = 1, attackRange = 5) {
  // Generates a pseudo random attack based on base attack
  // which is used as min attack value and attack range
  // which determines the difference between min and max atack

  // Calculate attack range, do a check on base attack to ensure it's
  // at least 1.
  const minAttack = baseAttack < 1 ? 1 : baseAttack;
  const maxAttack = minAttack + attackRange;

  // Calculate attack value and return it
  return Math.floor(Math.random() * (maxAttack - minAttack)) + minAttack;
}
