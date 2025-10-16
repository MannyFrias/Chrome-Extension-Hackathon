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

// const SPEED_DISPLAY_ID = "yt-speed-overlay";

// // injecting styles into site css
// function injectStyle() {
//   if (document.getElementById("yt-speed-overlay-style")) {
//     return;
//   }

//   const style = document.createElement("style");
//   style.id = "yt-speed-overlay";
//   style.textContent = `
//       #${SPEED_DISPLAY_ID} {
//       position: absolute;
//       top: 10px;
//       left: 10px;
//       z-index: 9999;
//       background: rgba(0, 0, 0, 0.7);
//       color: #fff;
//       padding: 4px 8px;
//       border-radius: 4px;
//       font-size: 14px;
//       font-weight: bold;
//       line-height: 1;
//       font-family: 'Inter', sans-serif;
//       opacity: 1;
//       transition: opacity 0.3s ease-in-out;
//       pointer-events: none; /* Allows clicks to pass through to the video */
//     }
//     `;

//   document.head.appendChild(style);
// }

// // updating speedDisplay with currSpeed
// function updateSpeedDisplay() {
//   const display = document.getElementById("SPEED_DISLPAY_ID");

//   display.innerHTML = `SPEED: <span> ${currSpeed}x</span>`;
// }

// function speedOverlay(container, video) {
//   const display = document.createElement("div");
//   display.id = SPEED_DISPLAY_ID;

//   container.appendChild(display);
//   updateSpeedDisplay(video);
//   video.addEventListener("ratechange", () => {
//     updateSpeedDisplay(video);
//   });

//   console.log("overlay injected");
// }

// function init() {
//   injectStyle();

//   const container = document.querySelector("#movie_player");
//   const video = document.querySelector("video");

//   if (container && video) {
//     speedOverlay(container, video);
//   } else {
//     console.log("video player not available");
//   }
// }

// const observer = new MutationObserver((mutationList, observer) => {
//   const container = document.querySelector("#movie_player");
//   const video = document.querySelector("video");

//   if (container && video && !document.getElementById(SPEED_DISPLAY_ID)) {
//     init();
//   } else if (!video && !document.getElementById(SPEED_DISPLAY_ID)) {
//     document.getElementById(SPEED_DISPLAY_ID).remove();
//   }
// });

// observer.observe(document.body, { childList: true, subTree: true });

// init();

// function showSpeedIndicator(speed) {
//   const indicator = document.createElement("div");
//   indicator.id = "video-speed-indicator";
//   indicator.textContent = `${speed.toFixed(2)}`;
//   indicator.style.cssText = `
//       position: fixed;
//       top: 20px;
//       right: 20px;
//       background: rgba(0, 0, 0, 0.8);
//       color: white;
//       padding: 12px 16px;
//       border-radius: 8px;
//       font-size: 18px;
//       font-weight: bold;
//       font-family: Arial, sans-serif;
//       z-index: 10000;
//       pointer-events: none;
//       transition: all 0.3s ease;
//       box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
//       border: 2px solid #4CAF50;
//   `;

//   document.body.appendChild(indicator);
// }
// showSpeedIndicator(currSpeed);
