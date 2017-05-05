class AppStorage {
    constructor() {
        this.storage = window.sessionStorage || window.localStorage;
    }

    getDataItem(key) {
        return this.storage.getItem(key) ? JSON.parse(this.storage.getItem(key)) : null;
    }

    setDataItem(key, item) {
        if(typeof item === 'object') item = JSON.stringify(item);
        else item = null;
        return this.storage.setItem(key, item);
    }
}

export default AppStorage;