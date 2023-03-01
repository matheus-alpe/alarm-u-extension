import { getCurrentTab, injectContentScript } from './api'
console.log('service_work started')

async function initializeModal() {
  const tabId = await getCurrentTab()
  if (!tabId) return
  injectContentScript(tabId, 'content.js')
}

async function messageHandler({ message }: { message: string }) {
  const tabId = await getCurrentTab()
  console.log('message tab:', tabId, message)

  if (!tabId) return

  if (message === 'close-modal') {
    injectContentScript(tabId, 'delete-content.js')
  }
}

chrome.action.onClicked.addListener(initializeModal)

chrome.runtime.onMessage.addListener(messageHandler)

chrome.storage.onChanged.addListener((storageDifference) => {
  console.log('diff chrome.storage.onChanged:', storageDifference)
})
