
const interval = setInterval(() => {
    const header = document.querySelector('._1QUKR');

    if (header) {
        clearInterval(interval);

        const button = createButtonSpeedAudio();

        header.appendChild(button);
    }
}, 1000);

function createButtonSpeedAudio() {
    const button = document.createElement('button');
    button.innerHTML = '2x';
    button.classList.add('twoTimesButton');

    button.addEventListener('click', () => {
        const audios = document.querySelectorAll('audio');

        audios.forEach((audio) => {
            if (audio.playbackRate === 2) {
                audio.playbackRate = 1;
                button.innerHTML = '2x';
            } else {
                button.innerHTML = '1x';
                audio.playbackRate = 2;
            }
        });
    });

    return button;
}
