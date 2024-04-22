// Variables to track time and interval
let timer;
let startTime;
let elapsedTime = 0;
let running = false;

// Get the DOM elements
const timeText = document.getElementById('time-text');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

// Function to format time in the format of MM:SS:MS
function formatTime(time) {
      const minutes = Math.floor(time / 60000);
      const seconds = Math.floor((time % 60000) / 1000);
      const milliseconds = Math.floor((time % 1000) / 10);
      return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
      // return `${minutes}:${seconds}:${milliseconds}`
}

// Function to start the stopwatch
function startTimer() {
      if (!running) {
            running = true;
            startTime = Date.now() - elapsedTime; // Calculate the initial start time
            timer = setInterval(updateTime, 10); // Update time every 10ms

            // Disable and enable buttons
            startBtn.disabled = true;
            pauseBtn.disabled = false;
            resetBtn.disabled = true;

            // add class to give styling when buttons are disabled/enabled
            startBtn.classList.add('disabled');
            pauseBtn.classList.remove('disabled')
            resetBtn.classList.add('disabled');

      }
}

// Function to stop the stopwatch
function stopTimer() {
      if (running) {
            running = false;
            clearInterval(timer);

            // Disable and enable buttons
            startBtn.disabled = false;
            pauseBtn.disabled = true;
            resetBtn.disabled = false;

            // add class to give styling when buttons are disabled/enabled
            startBtn.classList.remove('disabled');
            pauseBtn.classList.add('disabled');
            resetBtn.classList.remove('disabled');
      }
}

// Function to reset the stopwatch
function resetTimer() {
      elapsedTime = 0;
      timeText.textContent = formatTime(0);

      // Disable and enable buttons
      startBtn.disabled = false;
      pauseBtn.disabled = true;
      resetBtn.disabled = true;

      // add class to give styling when buttons are disabled/enabled
      startBtn.classList.remove('disabled');
      pauseBtn.classList.add('disabled');
      resetBtn.classList.add('disabled');
}

// Function to update the displayed time
function updateTime() {
      elapsedTime = Date.now() - startTime;
      timeText.textContent = formatTime(elapsedTime);
}

// Event listeners for the buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);