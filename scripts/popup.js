const slowButton = document.getElementById('slow');
const fastButton = document.getElementById('fast');
const resetButton = document.getElementById('reset');
const currSpeed = document.getElementById('currentSpeed');

function updateVideoSpeedDisplay(speed) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      function: (speedValue) => {
        const existingDisplay = document.getElementById('video-speed-display');
        if (existingDisplay) {
          existingDisplay.remove();
        }

        const video = document.querySelector('video');
        if (video) {
          const speedDisplay = document.createElement('div');
          speedDisplay.id = 'video-speed-display';
          speedDisplay.textContent = `${speedValue.toFixed(2)}x`;
          speedDisplay.style.position = 'absolute';
          speedDisplay.style.top = '10px';
          speedDisplay.style.left = '10px';
          speedDisplay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          speedDisplay.style.color = 'white';
          speedDisplay.style.padding = '5px 10px';
          speedDisplay.style.borderRadius = '5px';
          speedDisplay.style.fontFamily = 'Arial, sans-serif';
          speedDisplay.style.fontSize = '14px';
          speedDisplay.style.fontWeight = 'bold';
          speedDisplay.style.zIndex = '9999';
          speedDisplay.style.pointerEvents = 'none';

          const videoContainer = video.parentElement;
          if (
            videoContainer &&
            getComputedStyle(videoContainer).position === 'static'
          ) {
            videoContainer.style.position = 'relative';
          }

          (videoContainer || document.body).appendChild(speedDisplay);
        }
      },
      args: [speed],
    });
  });
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      function: () => {
        const video = document.querySelector('video');
        return video ? video.playbackRate : 1.0;
      },
    },
    (results) => {
      if (results && results[0] && results[0].result) {
        const speed = Math.floor(results[0].result * 100) / 100;
        currSpeed.textContent = speed.toFixed(2);
        updateVideoSpeedDisplay(speed);
      }
    }
  );
});

function changeSpeed(changeFunction) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: changeFunction,
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          const speed = results[0].result;
          currSpeed.textContent = speed.toFixed(2);
          updateVideoSpeedDisplay(speed);
        }
      }
    );
  });
}

// Fast button
fastButton.addEventListener('click', () => {
  changeSpeed(() => {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = video.playbackRate + 0.1;
      return video.playbackRate;
    }
    return null;
  });
});

slowButton.addEventListener('click', () => {
  changeSpeed(() => {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = video.playbackRate - 0.1;
      return video.playbackRate;
    }
    return null;
  });
});

resetButton.addEventListener('click', () => {
  changeSpeed(() => {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = 1.0;
      return video.playbackRate;
    }
    return null;
  });
});

document.addEventListener('keypress', (event) => {
  if (event.key === 'd') {
    changeSpeed(() => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = video.playbackRate + 0.1;
        return video.playbackRate;
      }
      return null;
    });
  }

  if (event.key === 'a') {
    changeSpeed(() => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = video.playbackRate - 0.1;
        return video.playbackRate;
      }
      return null;
    });
  }

  if (event.key === 's') {
    changeSpeed(() => {
      const video = document.querySelector('video');
      if (video) {
        video.playbackRate = 1.0;
        return video.playbackRate;
      }
      return null;
    });
  }
});
