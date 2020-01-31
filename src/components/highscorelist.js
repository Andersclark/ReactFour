
class Highscorelist {

  constructor() {
    this.highscores = [];
    this.add("The Noob", "Another noob", 42)
    this.add("Average Joe", "Joe's uncle", 26)
    this.add("Sun Tzu", "Confucius", 16)
  }

  add(player, opponent, turn) {
    this.highscores.push(new Score(player, opponent, turn));
  }
  getLeader() {
    this.highscores.sort((highscoreA, highscoreB) => {
      return !(highscoreA.turn - highscoreB.turn);
    });
    return this.highscores[0];
  }
  getHighscores() {
    this.highscores.sort((highcoreA, highscoreB) => {
      return highscoreA.turn - highscoreB.turn
    });
    return this.highscores.slice(0, 3);
  }
  getRecent() {
    this.highscores.sort((highscoreA, highscoreB) => { return highscoreA.time - highscoreB.time })
    return this.highscores.slice(0, 2);
  }
}


class Score {

  constructor(player, opponent, turn) {
    this.player = player;
    this.opponent = opponent;
    this.turn = turn;
    this.time = new Date();
  }

  toString() {
    return `${this.player} beat ${this.opponent} in ${this.turn} moves at ${this.time.toDateString()}`
  }

}
export default Highscorelist;