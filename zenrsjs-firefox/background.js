/* When the browser-action button is clicked... */
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.sendMessage(tab.id, {
      command: "lamaken"
    },
    function(msg) {
      console.log("result message:", msg);
    });
});