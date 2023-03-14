import { alarm } from './api'
import { modal } from './utils'

chrome.action.onClicked.addListener(modal.inject)

chrome.runtime.onMessage.addListener(modal.handler)

chrome.runtime.onStartup.addListener(alarm.setTimers)

chrome.storage.onChanged.addListener(alarm.setTimers)

chrome.alarms.onAlarm.addListener(alarm.notify)
