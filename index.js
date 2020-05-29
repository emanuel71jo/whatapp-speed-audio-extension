
const interval = setInterval(() => {
    const header = document.querySelector('._3auIg');

    if (header) {
        clearInterval(interval);

        const button = document.createElement('button');
        button.innerHTML = '2x';
        button.classList.add('twoTimesButton');

        button.addEventListener('click', () => {
            const audios = document.querySelectorAll('audio');

            audios.forEach((audio) => {
                audio.playbackRate = 2;
            });
        });

        header.appendChild(button);
    }
}, 1000);
