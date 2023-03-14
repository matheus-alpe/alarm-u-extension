export function create(timer: AlarmInfo) {
  chrome.notifications.create('', {
    type: 'basic',
    iconUrl: '/favicon-48x48.png',
    title: timer.time,
    message: timer.title || 'times up',
  })
}
