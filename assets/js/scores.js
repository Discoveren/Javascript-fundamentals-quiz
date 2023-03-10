var highScoreArr = JSON.parse(localStorage.getItem('highScoreArr'));
console.log(highScoreArr);
function assortScore() {
  highScoreArr.sort(function (a, b) {
    // b.score - a.score puts the scores in reverse
    return b.score - a.score;
  });
  buildHighScore();
}

var list = document.getElementById('highScoreList');
function buildHighScore() {
  highScoreArr.forEach((score) => {
    var li = document.createElement('li');
    li.classList.add('highscores');
    li.textContent = score.initials + ' ' + score.score;
    list.appendChild(li);
  });
}

assortScore();