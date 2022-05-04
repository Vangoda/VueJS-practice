let currentRound = 1;

const app = Vue.createApp({
  data() {
    return {
      monsterHP: 100,
      playerHP: 100,
      currentRound: 1,
      winner: null,
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
  watch: {
    currentRound() {
      this.winner = checkVictoryConditions(this.monsterHP, this.playerHP);
    },
  },
  methods: {
    attackMonster(baseAttack = 5, attackRange = 12) {
      // Decrease monsters health by semi random amount

      // Increment the round counter
      this.currentRound++;

      // Random attack the monster
      this.monsterHP -= randomValue(baseAttack, attackRange);
      // Keep the HP from going below zero
      this.monsterHP = this.monsterHP < 0 ? 0 : this.monsterHP;

      // Return the attack
      this.attackPlayer();

      // Increment round counter
      this.currentRound++;
    },
    attackPlayer() {
      // Decrease players health by random amount
      const baseAttack = 15;
      const attackRange = 5;

      // Random attack the player
      this.playerHP -= randomValue(baseAttack, attackRange);
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
    healPlayer() {
      // Restores players health by random amount

      // Define heal power
      const baseHeal = 25;
      const healRange = 10;

      // Calculate and add the HP to players health
      this.playerHP += randomValue(baseHeal, healRange);
      // Ensure that HP doesn't go above 100
      this.playerHP = this.playerHP > 100 ? 100 : this.playerHP;

      // Monster will not just wait around...
      this.attackPlayer();

      // Increment round counter
      this.currentRound++;
    },
  },
});

app.mount("#game");

function randomValue(baseAttack = 1, attackRange = 5) {
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

function checkVictoryConditions(monsterHP, playerHP) {
  // Checks if anyone won and determine the victor or draw.
  // Display alert.

  switch (true) {
    // Draw condition
    case monsterHP <= 0 && playerHP <= 0:
      console.log("It's a draw");
      // alert("It's a draw");
      return "draw";

      break;

    // Victory condition
    case monsterHP <= 0:
      console.log("You have won!");
      // alert("You have won!");
      return "player";

      break;

    // Loss condition
    case playerHP <= 0:
      console.log("You have lost!");
      // alert("You have lost!");
      return "monster";

      break;

    default:
      break;
  }
}
