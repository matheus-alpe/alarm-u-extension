export * as storage from './storage'

export function debounce(callback: Function, wait: number = 500) {
  let timeoutID: any

  return function (...args: any[]) {
    timeoutID && clearTimeout(timeoutID)
    timeoutID = setTimeout(() => callback(args), wait)
  }
}
