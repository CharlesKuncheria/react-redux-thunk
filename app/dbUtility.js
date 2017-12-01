import idb from 'idb'

class DbUtility {
    constructor() {
        console.log("invoked DbUtility")
        this.dbPromise = this.openDatabase();
    }

    openDatabase() {
        // If the browser doesn't support service worker,
        // we don't care about having a database
        if (!navigator.serviceWorker) {
          return Promise.resolve();
        }
        return idb.open('demoDb', 1, function(upgradeDb) {
          var store = upgradeDb.createObjectStore('repos', {
            keyPath: 'id'
          });
        });
      }
}

export let utility = new DbUtility();