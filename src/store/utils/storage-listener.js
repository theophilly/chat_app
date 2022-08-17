const storageKey = 'redux-local-tab-sync'

export function createStorageListener(store) {
    return () => {
      const wrappedAction = JSON.parse(localStorage.getItem(storageKey))
  
      delete wrappedAction.source
      store.dispatch(wrappedAction)
    }
  }