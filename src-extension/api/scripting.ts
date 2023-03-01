export function injectContentScript(tabId: number, file: string) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: [file],
  })
}
