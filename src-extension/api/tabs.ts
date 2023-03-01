export async function getCurrentTab() {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
    url: ['https://*/*', 'http://*/*'],
  })

  return tab && tab.id
}
