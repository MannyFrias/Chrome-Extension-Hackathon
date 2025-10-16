// console.log("this is a popup");
const slowButton = document.getElementById("slow");
const fastButton = document.getElementById("fast");
const resetButton = document.getElementById("reset");
const currSpeed = document.getElementById("currentSpeed");

// document.addEventListener("DOMContentLoaded", (tabs) => {
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.scripting.executeScript(
    {
      target: { tabId: tabs[0].id },
      function: () => {
        const video = document.querySelector("video");
        return video ? video.playbackRate : 1.0;
      },
    },
    (results) => {
      if (results && results[0] && results[0].result) {
        currSpeed.textContent = results[0].result;
        console.log(currSpeed.textContent);
      }
    }
  );
});

fastButton.addEventListener("click", () => {
  const newSpeed = parseFloat(currSpeed.textContent);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => {
          const video = document.querySelector("video");
          if (video) {
            video.playbackRate = video.playbackRate + 0.1;
            console.log(video.playbackRate);
            return video.playbackRate;
          }
          return null;
        },
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          currSpeed.textContent = results[0].result.toFixed(2);
          console.log(currSpeed.textContent);
        }
      }
    );
  });
});

document.addEventListener("keypress", (event) => {
  if (event.key === "d") {
    const newSpeed = parseFloat(currSpeed.textContent);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: () => {
            const video = document.querySelector("video");
            if (video) {
              video.playbackRate = video.playbackRate + 0.1;
              console.log(video.playbackRate);
              return video.playbackRate;
            }
            return null;
          },
        },
        (results) => {
          if (results && results[0] && results[0].result) {
            currSpeed.textContent = results[0].result.toFixed(2);
            console.log(currSpeed.textContent);
          }
        }
      );
    });
  }

  if (event.key === "a") {
    const newSpeed = parseFloat(currSpeed.textContent);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: () => {
            const video = document.querySelector("video");
            if (video) {
              video.playbackRate = video.playbackRate - 0.1;
              console.log(video.playbackRate);
              return video.playbackRate;
            }
            return null;
          },
        },
        (results) => {
          if (results && results[0] && results[0].result) {
            currSpeed.textContent = results[0].result.toFixed(2);
            console.log(currSpeed.textContent);
          }
        }
      );
    });
  }

  if (event.key === "s") {
    const newSpeed = parseFloat(currSpeed.textContent);

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.scripting.executeScript(
        {
          target: { tabId: tabs[0].id },
          function: () => {
            const video = document.querySelector("video");
            if (video) {
              video.playbackRate = 1.0;
              console.log(video.playbackRate);
              return video.playbackRate;
            }
            return null;
          },
        },
        (results) => {
          if (results && results[0] && results[0].result) {
            currSpeed.textContent = results[0].result.toFixed(2);
            console.log(currSpeed.textContent);
          }
        }
      );
    });
  }
});

slowButton.addEventListener("click", () => {
  const newSpeed = parseFloat(currSpeed.textContent);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => {
          const video = document.querySelector("video");
          if (video) {
            video.playbackRate = video.playbackRate - 0.1;
            console.log(video.playbackRate);
            return video.playbackRate;
          }
          return null;
        },
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          currSpeed.textContent = results[0].result.toFixed(2);
          console.log(currSpeed.textContent);
        }
      }
    );
  });
});

resetButton.addEventListener("click", () => {
  const newSpeed = parseFloat(currSpeed.textContent);

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tabs[0].id },
        function: () => {
          const video = document.querySelector("video");
          if (video) {
            video.playbackRate = 1.0;
            console.log(video.playbackRate);
            return video.playbackRate;
          }
          return null;
        },
      },
      (results) => {
        if (results && results[0] && results[0].result) {
          currSpeed.textContent = results[0].result.toFixed(2);
          console.log(currSpeed.textContent);
        }
      }
    );
  });
});
