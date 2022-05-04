// Create game app

const app = Vue.createApp({
  data() {
    return this.initializeGameData();
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
      // Return true if not divisible by 3
      // or if the game is over.

      return this.currentRound % 3 !== 0 || this.gameOver;
    },
    gameOver() {
      // Returns true if the game is over.
      // Determined by the value of winner.

      return this.winner !== null;
    },
  },
  watch: {
    currentRound() {
      // Log new round
      this.logMessage(`Round ${this.currentRound} started.`);

      // Determine if the game is over
      this.winner = checkVictoryConditions(this.monsterHP, this.playerHP);
    },
    winner() {
      // Log the game end and the winner
      this.logMessage(`Game over.`);
    },
  },
  methods: {
    attackMonster(baseAttack = 5, attackRange = 12) {
      // Decrease monsters health by semi random amount

      // Calcualte damage and deduce it from monsterHP
      const damage = randomValue(baseAttack, attackRange);
      this.monsterHP -= damage;
      // Log the attack
      this.logMessage(
        generateBattleLogText("Player", "monster", "attack", damage)
      );

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
      const damage = randomValue(baseAttack, attackRange);
      this.playerHP -= damage;
      // Log the attack
      this.logMessage(
        generateBattleLogText("Monster", "player", "attack", damage)
      );

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
      const heal = randomValue(baseHeal, healRange);
      this.playerHP += heal;
      // Log the action
      this.logMessage(generateBattleLogText("Player", "", "heal", heal));

      // Ensure that HP doesn't go above 100
      this.playerHP = this.playerHP > 100 ? 100 : this.playerHP;

      // Monster will not just wait around...
      this.attackPlayer();

      // Increment round counter
      this.currentRound++;
    },
    surrender() {
      // Set winner to monster
      // Log the surrender
      this.logMessage(`Player surrendered.`);

      this.winner = "monster";
    },
    initializeGameData() {
      // Returns data object with default game data

      return {
        monsterHP: 100,
        playerHP: 100,
        currentRound: 1,
        winner: null,
        currentRound: 1,
        battleLogs: [`Round 1 started.`],
      };
    },
    resetGame() {
      // Resets all the game parameters to default values

      Object.assign(this.$data, this.initializeGameData());
    },
    logMessage(message) {
      // Adds the message to the top of the game log

      this.battleLogs.unshift(message);
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

    // Default condition, winner is null.
    default:
      console.log("Still struggling!");
      return null;
      break;
  }
}

function generateBattleLogText(agent, subject, action, value) {
  // Concatenates a battle log string from input
  // Color the agent, subject and value.

  return `${agent} ${action}ed the ${subject} for ${value} HP.`;
}
