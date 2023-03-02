import { storage } from '../utils'
import { getCurrentTab } from './tabs'

/*
  TODO: implement setupTimers
  TODO: implement checkTimer
  TODO: implement removeTimer
*/

// TODO: iterate each stored timer and create an alarm if don'st exist.
export async function setTimers() {
  const timers = await storage.get('timers')
  console.log(timers)
  // chrome.alarms.create('alarmid', {
  //   delayInMinutes: 0.1,
  //   periodInMinutes: 0.1,
  // })
}

function alert(givenName: string) {
  alert(`Hello, ${givenName}`)
}

export async function notify() {
  let tabId = await getCurrentTab()
  if (!tabId) return

  // let name = 'World'

  // chrome.scripting.executeScript({
  //   target: { tabId },
  //   func: alert,
  //   args: [name],
  // })

  // chrome.notifications.create(
  //   '',
  //   {
  //     type: 'basic',
  //     iconUrl: '/favicon.ico',
  //     title: 'Bate o ponto',
  //     message: 'Não esquece o ponto',
  //   },
  //   console.log
  // )
}
