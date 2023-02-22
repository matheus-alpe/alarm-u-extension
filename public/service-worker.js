//background.js
console.log('service_work started')

async function getCurrentTab() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true, url: ["https://*/*", "http://*/*"]  });
  return tab;
}

function injectContentScript(tabId, file) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: [file],
  });
}

async function initializeModal () {
  const tab = await getCurrentTab()
  if (!tab) return
  injectContentScript(tab.id, 'content.js')
}

async function messageHandler ({ message }) {
  console.log('message handler:', message)

  const tab = await getCurrentTab()
  if (!tab) return

  if (message === 'close-modal') {
    injectContentScript(tab.id, 'delete-content.js')
  }
}

chrome.action.onClicked.addListener(initializeModal)

chrome.runtime.onMessage.addListener(messageHandler);

chrome.storage.onChanged.addListener((storageDifference) => {
  console.log('diff chrome.storage.onChanged:', storageDifference)
});
