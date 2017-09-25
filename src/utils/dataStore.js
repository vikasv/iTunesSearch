'use strict';

class DataStore {
    constructor() {
        this.cache = { };
    }

    setData(key, val) {
        this.cache[key] = val;
    }

    getData(key) {
        return this.cache[key];
    }

    clear() {
        this.cache = { };
    }
}

export default new DataStore();