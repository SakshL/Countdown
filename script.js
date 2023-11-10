function updateCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7); // Add one week to the current date
    const targetDate = endDate.getTime();

    const currentDate = new Date().getTime();
    const timeLeft = targetDate - currentDate;

    if (timeLeft <= 0) {
        document.getElementById('timer').innerHTML = 'Countdown expired!';
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('timer').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call to display the countdown immediately
