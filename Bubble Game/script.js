function genrateNumber() {
  const gameArea = document.querySelector(".game-area");
  
  let circleCount = 0;

  if(screen.width >= 768) {
    circleCount = 100;
  } else if (screen.width <= 767) {
    circleCount = 40;
  }

  for (let i = 0; i <= circleCount; i++) {
    rn = Math.floor(Math.random() * 10);
    gameArea.innerHTML += `<div class="circle">${rn}</div>`;
  }
}

function timer() {
  let timer = document.querySelector(".top-bar-text.timer .timerval");

  let time = 120;

  setInterval(() => {
    if (!document.hidden) {
      if (time > 0) {
        time--;
        timer.textContent = time;
      } else {
        const gameArea = document.querySelector(".game-area");
        const currentScore = document.querySelector(
          ".top-bar-text.score .scoreval"
        ).innerHTML;
        gameArea.innerHTML = `<div class="circle"> <span>Game over!</span><br> <span>Your score: ${currentScore}</span></div>`;
      }
    }
  }, 1000);
}

function score() {
  let score = document.querySelector(".top-bar-text.score .scoreval");
  const gameArea = document.querySelector(".game-area");
  gameArea.addEventListener("click", (dets) => {
    let clicked = dets.target;
    let hit = document.querySelector(".top-bar-text.hit .hitval").textContent;
    if (Number(clicked.innerHTML) === Number(hit)) {
      scoreVal += 10;
      score.innerHTML = scoreVal;
      setRandom();
      clicked.style.color = "rgb(248 250 252)";
    }
  });
}

function setRandom() {
  let hit = document.querySelector(".top-bar-text.hit .hitval");
  rn = Math.floor(Math.random() * 10);
  hit.textContent = rn;
  return rn;
}

let scoreVal = 0;

genrateNumber();
timer();
score();
setRandom();
