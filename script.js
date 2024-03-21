let timer = 60;

let score = 0;

let hitrn = 0;



function increaseScore() {
  score += 10;
  document.querySelector(".scoreVal").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector(".hitVal").textContent = hitrn;
}

function makebubble() {
  let clutter = "";

  for (let i = 0; i <= 210; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div
    class="bubble bg-green-800 hover:bg-green-950 w-[45px] h-[45px]  text-white rounded-full flex justify-center items-center font-semibold font-sans text-xl ">
    ${rn}
  </div>`;
  }

  document.querySelector(".pbtm").innerHTML = clutter;
}

function runTimer() {
  let timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector(".timerValue").innerHTML = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector(".pbtm").innerHTML = ` <div><h1 class="text-xl font-bold font-sans -translate-y-24">Game Over</h1> <h2 class="text-[16px] font-bold font-sans -translate-y-24 -translate-x-16">Reload Page To Restart Game</h2></div>`;
      
    }
  }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
  let clickedNumber = Number(dets.target.textContent);

  if (clickedNumber === hitrn) {
    increaseScore();
    makebubble();
    getNewHit();
  }
});

getNewHit();
runTimer();
makebubble();

