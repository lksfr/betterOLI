let controlsEnabled = true;
let displayToggled = false;

function toggleControls() {
    document.querySelectorAll('audio').forEach(audio => {
        audio.controls = controlsEnabled;
    });
    document.querySelectorAll('video').forEach(video => {
        video.controls = controlsEnabled;
    });
    controlsEnabled = !controlsEnabled;
}

function toggleDisplay() {
    const elements = document.querySelectorAll('a.extra span.extra-float');
    elements.forEach(element => {
        element.style.display = displayToggled ? 'none' : 'block';
    });
    displayToggled = !displayToggled;
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.toggleAudio) {
            toggleControls();
        } else if (request.toggleDisplay) {
            toggleDisplay();
        } else if (request.toggleVideo) {
            toggleControls();
        }
    }
);
