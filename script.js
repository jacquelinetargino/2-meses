// Música
const playMusicButton = document.getElementById('playMusic');
const music = document.getElementById('music');

playMusicButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playMusicButton.textContent = 'Pausar Música';
    } else {
        music.pause();
        playMusicButton.textContent = 'Tocar Música';
    }
});

// Surpresa
const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseMessage = document.getElementById('surpriseMessage');

surpriseBtn.addEventListener('click', () => {
    surpriseMessage.classList.toggle('hidden');
});
