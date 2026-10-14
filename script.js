const buttons = document.querySelectorAll('.sound-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundId = button.getAttribute('data-sound');
        const audioElement = document.getElementById(soundId);
        
        if (audioElement) {
            audioElement.currentTime = 0; // إعادة تشغيل الصوت من البداية لو تم الضغط عليه بسرعة
            audioElement.play();
        }
    });
});