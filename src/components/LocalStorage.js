class LocalStorage{
    set(obj) {
        let state = JSON.stringify(obj);
        localStorage.setItem('_myState', state);
    }

    get() {
        let stringObj = localStorage.getItem('_myState');
        return JSON.parse(stringObj);
    }
}

export default LocalStorage;