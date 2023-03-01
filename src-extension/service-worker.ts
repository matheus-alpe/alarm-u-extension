import './listeners'

/**
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
