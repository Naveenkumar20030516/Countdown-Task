// Callback hell for countdown and message display

// Function to display a message on the screen
const displayMessage = (message) => {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = message;
  };
  
  // Function to update the countdown on the screen
  const updateCountdown = (seconds) => {
    const countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `Countdown: ${seconds}`;
    console.log(seconds);
  };
  
  // Function to countdown
  const countdown = (seconds, callback) => {
    if (seconds > 0) {
      setTimeout(() => {
        updateCountdown(seconds);
        countdown(seconds - 1, callback);
      }, 1000);
    } else {
      callback();
      console.log('Happy Independence Day')
    }
  };
  
  // Start the countdown
  countdown(10, () => {
    displayMessage('Happy Independence Day');
  });
  