import { storage } from '../utils'
import { createTab, getCurrentTab, injectAlertScript, notification } from '.'

async function getAllAlarmsInfo() {
  const response = await storage.get<object>('timers')
  return Object.values(response) as AlarmInfo[]
}

function defineAlarm(timer: AlarmInfo) {
  if (!timer.active) return
  const [hours, minutes] = timer.time.split(':').map(Number)

  const TODAY_DATE = new Date()

  const invalidHour = TODAY_DATE.getHours() >= hours
  const invalidMinutes = TODAY_DATE.getMinutes() >= minutes

  if (invalidHour && invalidMinutes) return

  chrome.alarms.create(timer.id, {
    when: Number(
      new Date(
        TODAY_DATE.getFullYear(),
        TODAY_DATE.getMonth(),
        TODAY_DATE.getDate(),
        hours,
        minutes,
        0,
        0
      )
    ),
  })
}

export async function setTimers() {
  chrome.alarms.clearAll()
  const timers = await getAllAlarmsInfo()
  timers.forEach(defineAlarm)
}

type ChromeAlarm = {
  name: string
}

export async function notify(alarm: ChromeAlarm) {
  const timers = await getAllAlarmsInfo()
  const selectedTimer = timers.find((timer) => timer.id === alarm.name)
  if (!selectedTimer) return

  notification.create(selectedTimer)

  if (selectedTimer.url) createTab(selectedTimer.url)

  let tabId = await getCurrentTab()
  if (tabId) {
    injectAlertScript(tabId, selectedTimer)
  }
}
