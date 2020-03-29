const STORAGEKEY = 'highscores';

class HighscoreList {

  constructor() {
    const storedScores = JSON.parse(localStorage.getItem(STORAGEKEY))
    if(storedScores && storedScores.length > 3) { this.highscores = storedScores }
    else  {
      this.highscores = [];
      this.add("The Noob", "Another noob", 42, new Date(1993, 5, 2))
      this.add("Average Joe", "Joe's uncle", 26, new Date(2020, 3, 17))
      this.add("Sun Tzu", "Confucius", 16, new Date(5, 11, 11))
      this.sortScores()
    }
  }
  add(winnerName, looserName, totalTurns) {
    console.log('WINNER', winnerName)
    this.highscores.push({player: winnerName, opponent: looserName, turns: totalTurns, time: new Date()});
    this.sortScores()
    localStorage.setItem(STORAGEKEY, JSON.stringify(this.highscores))
  }
  sortScores(){
    this.highscores.sort((highscoreA, highscoreB) => {
      return (highscoreA.turns - highscoreB.turns)
    })
  };
  getHighscores() {
    this.highscores.sort((highscoreA, highscoreB) => {
      return highscoreA.turns - highscoreB.turns
    });
    return this.highscores;
  }
}
export default HighscoreList;