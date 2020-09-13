class LocalStorage {
    set (obj) {
      const state = JSON.stringify(obj)
      localStorage.setItem('_myState', state)
    }
  
    get () {
      const stringObj = localStorage.getItem('_myState')
      return JSON.parse(stringObj)
    }
  }
  
  export default LocalStorage
  