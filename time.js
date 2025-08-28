


let initialTime = 10; // seconds
let time = initialTime;
let intervalId = null;
let isRunning = false;

const showTimer = document.getElementById('showTimer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const timerForm = document.getElementById('timerForm');
const timerInput = document.getElementById('timerInput');

function updateDisplay() {
  showTimer.textContent = time > 0 ? `Time remaining: ${time} seconds` : "Time's up!";
}

function startTimer() {
  if (isRunning || time <= 0) return;
  isRunning = true;
  intervalId = setInterval(() => {
    time--;
    updateDisplay();
    if (time <= 0) {
      clearInterval(intervalId);
      isRunning = false;
    }
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;
  clearInterval(intervalId);
  isRunning = false;
}

function resetTimer() {
  clearInterval(intervalId);
  time = initialTime;
  isRunning = false;
  updateDisplay();
}

timerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const val = parseInt(timerInput.value, 10);
  if (!isNaN(val) && val > 0) {
    initialTime = val;
    time = initialTime;
    clearInterval(intervalId);
    isRunning = false;
    updateDisplay();
  }
});

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
