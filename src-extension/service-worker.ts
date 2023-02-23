//background.js
console.log('service_work started')

async function getCurrentTab() {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
    url: ['https://*/*', 'http://*/*'],
  })
  return tab
}

function injectContentScript(tabId, file) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: [file],
  })
}

async function initializeModal() {
  const tab = await getCurrentTab()
  if (!tab) return
  injectContentScript(tab.id, 'content.js')
}

async function messageHandler({ message }) {
  console.log('message handler:', message)

  const tab = await getCurrentTab()
  if (!tab) return

  if (message === 'close-modal') {
    injectContentScript(tab.id, 'delete-content.js')
  }
}

chrome.action.onClicked.addListener(initializeModal)

chrome.runtime.onMessage.addListener(messageHandler)

chrome.storage.onChanged.addListener((storageDifference) => {
  console.log('diff chrome.storage.onChanged:', storageDifference)
})

/**
let injectFile = document.getElementById('inject-file');
let injectFunction = document.getElementById('inject-function');

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

injectFile.addEventListener('click', async () => {
  let tab = await getCurrentTab();

  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    files: ['content-script.js']
  });
});

function showAlert(givenName) {
  alert(`Hello, ${givenName}`);
}



injectFunction.addEventListener('click', async () => {
  let tab = await getCurrentTab();

  let name = 'World';
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: showAlert,
    args: [name]
  });

  chrome.notifications.create(
    '',
    {
      type: 'basic', 
      iconUrl: '/favicon.ico',
      title: 'Bate o ponto',
      message: 'Não esquece o ponto'
    },
    console.log,
  )
});

var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 18, 39, 0, 0) - now;
setTimeout(function(){alert("It's 10am!")}, millisTill10);
 */
