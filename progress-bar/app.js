const statusBar = document.getElementById('status');
const button = document.getElementById('run-button');
const queueStatus = document.getElementById('queue');

const totalWidth = 200;
const totalTime = 2000;
const increment = (totalWidth / totalTime);

let queue = 0;

let currentTime = 0;
let currentWidth = 0;

button.addEventListener('click', () => {
    queue++;
    queueStatus.innerHTML = '(' + queue + ')';

    if (queue > 0) {
        onClickHandler();
    }
})

function onClickHandler() {
    const intervalId = setInterval(() => {
        currentWidth += increment;
        currentTime += 1;

        statusBar.style.width = currentWidth.toFixed().toString() + 'px';

        if (currentTime == totalTime) {
            clearInterval(intervalId);
            currentWidth = 0;
            currentTime = 0;
            statusBar.style.width = '0px';
            queue--;
            queueStatus.innerHTML = queue === 0 ? "" : '(' + queue + ')'

        }
    }, 1);
}

