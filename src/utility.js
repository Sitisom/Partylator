export function getState (lsName, stateObj) {
  if (!stateObj.length && localStorage.getItem(lsName)) {
    try {
      stateObj = JSON.parse(localStorage.getItem(lsName))
    } catch (e) {
      localStorage.removeItem(lsName)
    }
  }
  return stateObj
}

export function url(endpoint) {
  let hostname = 'http://localhost:8000/api'
  return hostname + endpoint
}
