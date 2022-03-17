const storage = {

    set: (keyName, value) => {
        const json = JSON.stringify(value);
        window.localStorage.setItem(keyName, json);
    },

    get: (keyName) => {
        const json = window.localStorage.getItem(keyName);
        const value = JSON.parse(json);
        return value;
    },

    unset: (keyName) => {
        window.localStorage.removeItem(keyName);
    }

};

export default storage;