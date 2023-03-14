export function injectContentScript(tabId: number, file: string) {
  chrome.scripting.executeScript({
    target: { tabId },
    files: [file],
  })
}

export function injectAlertScript(tabId: number, timer: AlarmInfo) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: createAlert,
    args: [timer],
  })
}

function createAlert(timer: AlarmInfo) {
  alert(`${timer.time} - ${timer.title || 'times up!'}`)
}
