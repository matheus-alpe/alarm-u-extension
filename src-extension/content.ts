function createIframe() {
  const iframeId = 'alarm-u-modal'
  const iframeAlreadyExist = document.getElementById(iframeId)
  if (iframeAlreadyExist) {
    chrome.runtime.sendMessage({ message: 'close-modal' })
    return
  }

  const iframe = document.createElement('iframe')
  iframe.src = chrome.runtime.getURL('index.html')

  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allowtransparency', 'allowtransparency')
  iframe.setAttribute('id', iframeId)
  iframe.setAttribute(
    'style',
    'border: 0; position: fixed; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: 100000; background: transparent;'
  )

  return iframe
}

function injectModal(iframe) {
  if (!iframe) return
  document.body.insertAdjacentElement('beforeend', iframe)
}

injectModal(createIframe())
