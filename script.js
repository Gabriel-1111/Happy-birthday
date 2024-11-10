// JavaScript to create animated confetti
document.addEventListener('DOMContentLoaded', function () {
    const confettiContainer = document.querySelector('.confetti-container');

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random positioning
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        
        // Random colors for confetti
        const colors = ['#ff6b6b', '#ffdd59', '#1dd1a1', '#54a0ff', '#5f27cd'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        confettiContainer.appendChild(confetti);
        
        // Remove confetti after animation ends
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }

    // Generate multiple confetti pieces
    setInterval(createConfetti, 150);
});
