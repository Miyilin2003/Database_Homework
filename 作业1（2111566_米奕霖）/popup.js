document.addEventListener('DOMContentLoaded', function () {
  var changeColorButton = document.getElementById('changeColor');
  changeColorButton.addEventListener('click', function () {
    var color = document.getElementById('colorPicker').value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        function: setPageBackgroundColor,
        args: [color]
      });
    });
  }, false);
}, false);

function setPageBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
