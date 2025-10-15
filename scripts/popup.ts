// console.log("this is a popup");
document.addEventListener("DOMContentLoaded", () => {
  const slowButton = document.getElementById("slow");
  const fastButton = document.getElementById("fast");
  const resetButton = document.getElementById("reset");
  const currSpeed = document.getElementById("currentSpeed");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0];
    chrome.scripting.executeScript({
      target: {tabId: tab.id}, 
      function: () => {
        
      }
    })
}, })
